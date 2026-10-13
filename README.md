# ALBR. Agency

Site estático em React + Vite, com página institucional e três demonstrações em português brasileiro e inglês americano. A preferência de idioma fica na URL (?lang=en-US) e acompanha a navegação entre páginas.

## Desenvolvimento

Instale as dependências com pnpm install e inicie com pnpm dev.

## Build

Execute pnpm build para gerar a pasta dist. No Cloudflare Pages, use pnpm build como comando de build e dist como diretório de saída. As rotas são servidas como SPA.

## Conteúdo e identidade

- Os textos em português e inglês ficam no objeto copy, no início de src/main.jsx.
- Para abrir uma página em inglês, acrescente ?lang=en-US à URL. O seletor PT / EN fica no canto superior direito.
- A página principal está no componente Home.
- As demonstrações têm componentes próprios: Education, Business e Personal.
- Os estilos de cada demonstração estão separados por classes de escopo em src/styles.css.
- Nenhuma demonstração oferece checkout ou inscrição real.
- O WhatsApp comercial configurado é +55 75 99928-0550.

As páginas usam Google Fonts e uma fotografia do Unsplash por URL. O logo original fornecido está em public/albr-logo.png e é usado também como favicon. O texto de contato do WhatsApp acompanha o idioma selecionado.
