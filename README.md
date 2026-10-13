# ALBR. Agency

Site estático em React + Vite, com página institucional e três landing pages demonstrativas fictícias.

## Desenvolvimento

Requer Node.js 22 ou superior e pnpm:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Build

```sh
pnpm build
pnpm preview
```

O build gera `dist/`. No Cloudflare Pages, configure o comando `pnpm install --frozen-lockfile && pnpm build` e a pasta de saída `dist`.

## Rotas

- `/` — site oficial da ALBR.
- `/educacao/` — Código de Origem, conceito fictício.
- `/empreendedorismo/` — Órbita, conceito fictício.
- `/desenvolvimento-pessoal/` — Entretempo, conceito fictício.

O logo original está em `public/albr-logo.png` e também é usado como favicon. O WhatsApp comercial (+55 75 99928-0550) está configurado no contato. Nenhuma demonstração oferece checkout ou inscrição real.
