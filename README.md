# RD Energia Solar

Site institucional estático da RD Energia Solar, com atendimento em São Gonçalo e na Região dos Lagos.

## Estrutura

- `index.html`: conteúdo e seções do site.
- `styles.css`: layout, identidade visual e responsividade.
- `script.js`: interações, animação dos indicadores e formulários de orçamento via WhatsApp.
- `assets/rd/`: logo, fotografias, vídeos e versões otimizadas.
- `Inspirações/`: documentação e referências do projeto.

## Publicar na Vercel

O site não exige build nem instalação de dependências. Importe este repositório na Vercel e use:

- Framework preset: **Other**
- Root Directory: `.`
- Build Command: vazio
- Output Directory: `.`
- Install Command: vazio

A Vercel servirá `index.html` e os arquivos estáticos de `assets/rd/`. A pasta `Inspirações/` é mantida no GitHub, mas excluída da publicação pelo `.vercelignore`.

Para publicar via CLI, execute `vercel` para preview e `vercel --prod` para produção, já dentro da pasta do projeto.
