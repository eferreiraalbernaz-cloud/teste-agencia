# Enzo Albernaz | Desenvolvedor Web

Portfólio pessoal feito com React e Vite. O site apresenta serviços de criação e reformulação de sites e três conceitos demonstrativos fictícios. Não há checkout, formulário ou backend.

## Desenvolvimento e publicação

- Instale as dependências com `pnpm install`.
- Inicie localmente com `pnpm dev`.
- Gere a versão de produção com `pnpm build` e confira com `pnpm preview`.
- O Cloudflare Pages continua configurado para `pnpm install --frozen-lockfile && pnpm build`, com saída em `dist`.
- O plugin em `vite.config.js` gera páginas estáticas para as rotas das demonstrações, além de `sitemap.xml` e `robots.txt`.

## Atualizar informações do portfólio

Edite `src/site-config.json` para alterar o nome, o telefone do WhatsApp, os links sociais, o endereço canônico ativo e os textos de SEO. O endereço atualmente ativo permanece como canonical. `plannedSiteUrl` registra o destino desejado, mas não o ativa nem altera a infraestrutura.

Os textos em português e inglês e o conteúdo das demonstrações estão em `src/main.jsx`. Os estilos ficam em `src/styles.css`. Os conceitos da área Projetos são fictícios e identificados como demonstrações; as tecnologias listadas correspondem ao projeto atual.

Os links sociais não aparecem enquanto `socialLinks` estiver vazio. Quando existirem URLs reais, adicione objetos com `label` e `url` nesse campo.

## Domínio e SEO

O projeto continua publicado em `https://albr-agency.pages.dev`. Não existe redirecionamento ativo. Consulte `DOMAIN-MIGRATION.md` antes de trocar o endereço: `albernaz.pages.dev` é um subdomínio de Pages e a Cloudflare não permite mudar o subdomínio de um projeto Pages existente. A documentação recomenda excluir e criar outro projeto, ação que não deve ser feita sem planejar como preservar os links já enviados.

Depois de definir um domínio compatível e ativá-lo, atualize `siteUrl` em `src/site-config.json` ou configure `VITE_SITE_URL` no ambiente de build do Cloudflare Pages. O build usa essa URL para canonicals, Open Graph, dados estruturados, sitemap e robots. Não envie o site ao Google Search Console automaticamente.

## Identidade visual

O símbolo fornecido continua em `public/albr-logo.png` e `public/favicon.png`. A interface preserva o estilo editorial escuro, as fontes existentes e as composições diferentes das três demonstrações. A paleta do portfólio usa preto `#050505`, cinza escuro `#171717`, branco `#FFFFFF`, cinza `#888888` e um detalhe azul acinzentado discreto.
