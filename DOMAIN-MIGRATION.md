# Migração de domínio — Enzo Albernaz

## Estado atual

- Projeto Cloudflare Pages: `albr-agency`.
- Endereço ativo: `https://albr-agency.pages.dev`.
- Endereço planejado informado: `https://albernaz.pages.dev`.
- Não há redirecionamento ativo e nenhum domínio foi trocado.

## Limite do endereço `albernaz.pages.dev`

`albernaz.pages.dev` é um subdomínio de Pages, não um domínio personalizado comprado e controlado pelo proprietário do site. A Cloudflare informa que o subdomínio `*.pages.dev` não pode ser alterado em um projeto existente; para mudar esse endereço, é necessário excluir e criar outro projeto. Isso interromperia a infraestrutura atual e exige uma decisão explícita sobre como manter os links antigos.

Por isso, não altere o nome do projeto nem exclua `albr-agency`. O pedido de preservar um único projeto e manter os links distribuídos não pode ser concluído usando `albernaz.pages.dev` sem resolver essa incompatibilidade primeiro.

## Caminho que mantém um único projeto

Se a prioridade for manter o projeto `albr-agency`, o endereço atual pode continuar ativo e um domínio próprio real pode ser conectado a esse mesmo Pages. Depois que o novo domínio estiver ligado e validado:

1. Atualize `siteUrl` em `src/site-config.json` ou defina `VITE_SITE_URL` para o domínio ativo no build de produção.
2. Gere e revise um build. Confirme as quatro URLs diretas, canonical, Open Graph, sitemap e robots no domínio novo.
3. No painel Cloudflare, em **Workers & Pages → albr-agency → Custom domains**, adicione o domínio e conclua a configuração DNS/HTTPS pedida pela Cloudflare.
4. Depois de confirmar o novo domínio no ar, configure o redirecionamento 301 em **Bulk Redirects** com preservação de query string, subcaminhos e sufixo de caminho, conforme a documentação da Cloudflare.
5. Teste URLs antigas com e sem caminho e com parâmetros antes de considerar a migração concluída.

Não use uma regra genérica de `public/_redirects` para essa troca sem uma regra por host: ela é avaliada dentro do projeto Pages e pode redirecionar também o domínio novo. O redirecionamento só deve ser ativado após o novo domínio responder corretamente.

## Se `albernaz.pages.dev` for obrigatório

Será necessário rever o requisito de manter apenas um projeto Pages e planejar a continuidade do endereço antigo antes de criar ou excluir projetos. A conta atualmente mostra apenas o projeto `albr-agency`; ainda não há confirmação de que o nome `albernaz` esteja disponível globalmente. Nenhuma dessas alterações foi executada.

Documentação Cloudflare:

- [Limitações conhecidas do Pages](https://developers.cloudflare.com/pages/platform/known-issues/)
- [Redirecionar o subdomínio Pages para um domínio personalizado](https://developers.cloudflare.com/pages/how-to/redirect-to-custom-domain/)
