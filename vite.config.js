import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const rootDir = dirname(fileURLToPath(import.meta.url));
const configPath = resolve(rootDir, 'src/site-config.json');

function escapeHtml(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function replaceMeta(html, selector, replacement) {
  return html.replace(selector, replacement);
}

function staticSeoOutput(siteUrl) {
  return {
    name: 'static-seo-output',
    async writeBundle(outputOptions) {
      const siteConfig = JSON.parse(await readFile(configPath, 'utf8'));
      const baseUrl = (siteUrl || siteConfig.siteUrl).replace(/\/+$/, '');
      const outDir = outputOptions.dir || resolve(rootDir, 'dist');
      const baseHtml = await readFile(join(outDir, 'index.html'), 'utf8');
      const urls = [];

      for (const [route, localizedMetadata] of Object.entries(siteConfig.pages)) {
        const meta = localizedMetadata.pt;
        const canonicalUrl = `${baseUrl}${route}`;
        const imageUrl = `${baseUrl}/albr-logo.png`;
        const websiteName = `${siteConfig.displayName} | ${siteConfig.role.pt}`;
        const schema = route === '/'
          ? { '@context': 'https://schema.org', '@type': 'WebSite', name: websiteName, url: canonicalUrl, description: meta.description, inLanguage: 'pt-BR' }
          : { '@context': 'https://schema.org', '@type': 'WebPage', name: meta.title, url: canonicalUrl, description: meta.description, inLanguage: 'pt-BR', isPartOf: { '@type': 'WebSite', name: websiteName, url: `${baseUrl}/` } };
        let html = baseHtml.replace(/<html lang="[^"]+">/, '<html lang="pt-BR">');
        html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);
        html = replaceMeta(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${escapeHtml(meta.description)}" />`);
        html = replaceMeta(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`);
        html = replaceMeta(html, /<meta property="og:locale"[^>]*>/, '<meta property="og:locale" content="pt_BR" />');
        html = replaceMeta(html, /<meta property="og:site_name"[^>]*>/, `<meta property="og:site_name" content="${escapeHtml(websiteName)}" />`);
        html = replaceMeta(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${escapeHtml(meta.title)}" />`);
        html = replaceMeta(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${escapeHtml(meta.description)}" />`);
        html = replaceMeta(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`);
        html = replaceMeta(html, /<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`);
        html = replaceMeta(html, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`);
        html = replaceMeta(html, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`);
        html = replaceMeta(html, /<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`);
        html = html.replace(/<script id="site-schema" type="application\/ld\+json">[\s\S]*?<\/script>/, `<script id="site-schema" type="application/ld+json">${JSON.stringify(schema)}</script>`);

        if (route === '/') {
          await writeFile(join(outDir, 'index.html'), html);
        } else {
          const routeDir = join(outDir, route.replace(/^\/+|\/+$/g, ''));
          await mkdir(routeDir, { recursive: true });
          await writeFile(join(routeDir, 'index.html'), html);
        }
        urls.push(`<url><loc>${escapeHtml(canonicalUrl)}</loc></url>`);
      }

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
      const robots = `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`;
      await writeFile(join(outDir, 'sitemap.xml'), sitemap);
      await writeFile(join(outDir, 'robots.txt'), robots);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, rootDir, 'VITE_');
  return {
    plugins: [react(), staticSeoOutput(env.VITE_SITE_URL)],
  };
});
