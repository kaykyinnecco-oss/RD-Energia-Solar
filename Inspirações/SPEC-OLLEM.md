# Spec de referência — página inicial Ollem

**Referência:** [ollem.com.br/site-principal/index.html](https://www.ollem.com.br/site-principal/index.html)  
**Captura fornecida:** `screencapture-ollem-br-site-principal-index-html-2026-09-25-13_00_23.png` (1366 × 7946 px).  
**Verificação:** leitura do HTML e das folhas CSS publicadas em 25/09/2026. A captura é uma representação da página inteira em desktop; medidas responsivas abaixo vêm do CSS publicado. Use o HTML live como fonte canônica caso textos/elementos mudem.

> Esta spec documenta a referência para implementação no projeto “Inspirações”. Recriar a composição e o comportamento; não reutilizar marca, logotipo ou textos protegidos como se fossem próprios. Para uma cópia de produção, obter os direitos dos ativos e conteúdo ou substituir por material autorizado.

## Direção de arte e regras globais

- Estética de engenharia/energia: limpa, institucional, alternando branco, cinza muito claro, grafite e grandes áreas verde vivo. Contraste alto e bastante espaço vertical.
- Fonte: Montserrat (Google Fonts), pesos 300–800. Antialiasing. Títulos pesados (700–800), corpo 400 e rótulos 700 em caixa alta com espaçamento de letras.
- Container máximo 1200 px; gutter 24 px. Faixas esticam a 100% da viewport. Página usa `box-sizing:border-box`.
- Paleta oficial observada: verde principal `#11C90A`; verde profundo para botões/fundos `#00A819`; verde escuro de ação/texto `#007800`; lima `#8EF705`; grafite `#1A1A1A`; grafite secundário `#2D2D2D`; branco `#FFFFFF`; fundo suave `#F8F8F8`; texto secundário `#4F4F4F`; borda `#C3C3C3`.
- Escala tipográfica CSS: display 60/1.05/800; H1 44/1.1/700; H2 32/1.15/700; H3 24/1.25/600; H4 20/1.3/600; corpo 16/1.6; corpo grande 18/1.6; texto menor 14/1.55; legenda 12/1.45.
- Títulos de seção usam clamp 28 px–44 px, 800, tracking -0.02em. “Olho” de seção: 12 px, bold, caixa alta, tracking .14em, verde; em grafite, lima.
- Espaçamento base: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px. Seções padrão 96 px no eixo vertical; compactas 48 px; faixa de contato com 64 px.
- Raios: 4, 8, 12, 20 px e pill 999 px. Botões arredondados, peso 600–700; padrão verde profundo com texto branco; botão em faixa verde clara é grafite; botão branco em bloco verde profundo tem texto verde escuro. Padding normal 12×22 px, CTA hero 16×34 px.
- Cards: fundo branco, borda 1 px `#C3C3C3`, raio 12 px, padding 24 px, sombra discreta. Imagens de projetos com raio 20 px e `object-fit:cover`.
- Régua de título: 72×4 px, verde, raio 2 px, logo abaixo do título.

## Geometria e responsividade

- Header desktop: sobreposto ao hero, absoluto no topo, transparente, altura interna 84 px. Marca à esquerda, navegação alinhada à direita e botão “Orçamento”.
- Hero tem altura mínima 88vh (78vh até breakpoint 820 px), vídeo preenchendo com `object-fit:cover`; camada escura em gradiente para legibilidade. H1 usa clamp(40 px, 7vw, 84 px), linha .98, peso 800.
- Layouts de duas colunas: grid `repeat(auto-fit,minmax(320px,1fr))`, gap 64 px, alinhamento central. Slot de foto tem mínimo 360 px, preenchimento cover.
- Mobile/tablet: nav colapsa para botão hambúrguer até 820 px e abre painel branco abaixo do header; hero reduz para 78vh. Grade de matérias torna-se uma coluna abaixo de 768 px. Formulário e rodapé viram uma coluna abaixo de 960 px; campos lado a lado viram uma coluna até 820 px. A grade de cards é fluida. Respeitar `prefers-reduced-motion`.
- A página original é comprida, cerca de 7.9k px na captura 1366 px de largura. Não condensar as seções: a alternância e o ritmo são parte essencial da semelhança.

## Estrutura, conteúdo e interação — de cima para baixo

1. **Header/hero.** Logo branca; itens Home, Quem somos, Projetos, Serviços (menu suspenso), Ollem Soluções, Ollem Energy; CTA “Orçamento”. Hero com vídeo de cobertura de telhados/usina solar, H1 “Soluções completas em energia” (palavra energia em lima), apoio “Da geração solar à recarga de veículos elétricos — do primeiro atendimento à operação.” e botão “Fale conosco” âncora para contato. Menu Serviços lista 11 destinos: Energia Solar On-Grid; Energia Híbrida, Backup & Baterias; Manutenção Solar & O&M; Padrão, Poste, Cabine & Subestação; Adequações Elétricas; SPDA; Carregadores Veiculares; Eletropostos & Postos de Combustíveis; Condomínios | Comodato; Hotéis, Pousadas & Comércios | Comodato; Ollem App.
2. **Tira de atalhos.** Barra grafite compacta, 2 links centralizados: “Ollem Soluções” e “Ollem Energy”; acentos lima; hover verde.
3. **Intro de marca.** Grafite, centralizada, logo branca (76 px alto), largura de texto máx. 70ch. Dois parágrafos: oferta de soluções completas desde atendimento até pós-venda; “Nossa energia nos conecta.” e geração solar, armazenamento e eletromobilidade para residências, empresas, indústrias, condomínios e frotas.
4. **Destaques.** Faixa verde `#11C90A` com padrão de marca d’água muito sutil no lado direito, grid duas colunas: olho “Por que a Ollem”; título “Referência em energia limpa”; cinco itens com » (engenharia/equipe própria; solar on-grid, híbrida e off-grid; recarga e gestão; homologação e documentação; projeto, instalação e pós-venda); botão grafite “Orçamento gratuito”. À direita, foto da usina municipal. Padding seção 96 px.
5. **Selos.** Faixa grafite compacta; três chips grafite médio com texto lima: “10+ anos de engenharia”; “Energia solar & híbridos”; “Recarga de veículos elétricos”.
6. **Projeto personalizado.** Fundo branco, imagem à esquerda, texto à direita. Olho “Projeto sob medida”; título “Cada cliente, um projeto personalizado”; parágrafo explica avaliação do consumo e espaço e projeção mensal; CTA “Fale com um especialista”.
7. **Simulador.** Faixa verde profundo `#00A819`, centralizada, largura de conteúdo máx. 920 px. Olho “Simule a sua economia”; título branco “Quanto você pode economizar”; texto explicativo; input “Valor médio da conta de luz (R$)” e botão branco “Calcular economia”. Campo recebe moeda e exibe resultado estimado. Formulário central máx. 460 px.
8. **Impacto.** Fundo grafite, olho “Nosso impacto”, título branco “Resultados que conectam”; 5 métricas lima em linha fluida: 1.500+ instalações realizadas; 18.000 t de CO₂ evitadas; R$ 45 mi de economia gerada; 90k+ árvores preservadas; 62 MWp instalados. Números 52 px/800, legenda 14 px. Contadores animam até alvo.
9. **Vantagens + citação.** Branco, duas colunas; olho “Vantagens”; título “Mais economia, valorização e previsibilidade”; lista com check verde: energia limpa e renovável, valorização do imóvel, sem ajuste de tarifa, investimento pago entre 2 e 5 anos. Foto à direita. Citação sobre alta irradiação solar do Brasil abaixo, fundo `#F8F8F8`, barra lateral verde e raio 8 px.
10. **Declaração.** Fundo suave, centralizada, largura máx. 920 px. Título “A Ollem cuida de todo o processo — do projeto à energia gerando”; texto informa que a equipe leva o projeto até o sistema em funcionamento.
11. **Notícias e conteúdos.** Fundo branco; olho “Ollem na mídia”; título sublinhado “Notícias e conteúdos”; três cards em grid (gap 24 px), imagem de 190 px, corte cover, conteúdo padding 24 px, chip Instagram, título e link “Ver publicação →”. Conteúdo: Ollem no PodCosta; inauguração do eletroposto no Trevo de Praia Seca; primeira usina fotovoltaica da Região dos Lagos. Abre Instagram em nova aba.
12. **CTA visita.** Faixa verde clara compacta, centralizada; título “Agende sua visita técnica sem custo”; texto “Junte-se a quem já transformou a conta de luz em economia com a Ollem.”; botão grafite “Fale com um especialista”.
13. **Missão/visão/valores.** Fundo suave. Olho “O que nos move”; título com régua “Missão, visão e valores”; três cards em uma linha, raio 12 px e borda fina. Missão: “Impactar a sociedade com soluções inovadoras e sustentáveis”; visão: referência em mobilidade elétrica e eficiência energética no Brasil; valores: Organização, Lealdade, Lucratividade, Energia Positiva, Mérito (iniciais verdes).
14. **Depoimentos.** Branco; olho “Depoimentos”; título com régua “Quem já conectou com a Ollem”; 6 cards em grid responsivo, 3 colunas em desktop, cada um com aspas verdes, texto, nome e contexto. Textos e nomes conforme o HTML da referência: Paulo Barros/Comércio Araruama RJ; João Silva/Rede de Postos SP; Maria Costa/Indústria Têxtil RJ; Roberto Pinto/Shopping Center MG; Ana Lima/Proprietária de EV; Carlos Ferreira/Hotel Boutique RJ.
15. **Contato.** A faixa verde profunda de contato vem após depoimentos (a numeração editorial da origem salta de 14 para 16). ID `contato`; grid duas colunas com “Fale conosco”, título “Nossa energia nos conecta”, texto para pedir cenário/conta e dados contato@ollem.com.br, +55 22 98141-1164 e endereço Estrada Araruama-Rio Bonito, 5122, Itatiquara, Araruama/RJ, CEP 28985-678. À direita, card branco arredondado com formulário de lead CRM; a referência carrega formulário Bitrix24 externo, portanto replicar integração somente se autorizada, ou usar formulário funcional equivalente.
16. **Rodapé.** Fundo grafite, grid 3 colunas: logo e resumo; navegação; contato. Links lima. Linha inferior: “© 2026 Ollem do Brasil. Todos os direitos reservados.” e “Construído com o Design System Ollem.”
17. **WhatsApp flutuante.** Botão circular 60×60 px, fixo a 20 px do canto inferior direito, verde WhatsApp `#25D366`, ícone branco, sombra; abre link com número +55 22 98141-1164 e mensagem pré-preenchida.

## Estados e comportamento necessários

- Todos os CTAs de orçamento/contato levam a `#contato`; menus, links de serviços e Instagram funcionam. Header e botões têm hover/foco visível; link atual destacado.
- Menu abre/fecha e expõe `aria-expanded`. Formulário valida campos e confirma envio; não simular envio sem backend. Simulador valida valor monetário e apresenta estimativa claramente identificada como estimativa.
- Vídeo inicia mudo, em loop, inline, com poster; fornecer poster e respeitar redução de movimento/dados quando possível. Contadores e reveal não podem esconder o conteúdo com animação desativada.
- Acessibilidade: hierarquia H1 única, texto alternativo descritivo, labels reais nos campos, navegação por teclado, contraste e foco.

## Inventário de ativos referenciados na página

- Vídeo hero: `../fotos/hero-video.mp4`, poster `../fotos/home-hero.jpg`.
- `../fotos/usina-prefeitura.png` — bloco de destaque, instalação solar municipal.
- `../fotos/projetos-personalizados.png` — projeto personalizado/residencial ou painel de monitoramento.
- `../fotos/projetos-hero.jpg` — foto de telhado residencial com módulos fotovoltaicos.
- `../fotos/insta-podcosta.png` — card de conteúdo: participação da Ollem no PodCosta.
- `../fotos/insta-eletroposto-praiaseca.jpg` — inauguração do eletroposto Praia Seca.
- `../fotos/insta-usina.png` — primeira usina fotovoltaica da Região dos Lagos.
- `../assets/ollem-logo-branco.svg`, `../assets/ollem-simbolo.svg`, `../assets/ollem-pattern-marca-dagua.png` são marca/arte vetorial ou padrão, não devem ser inventados por geração de foto; usar arquivo autorizado.

## Fonte técnica e limites da medição

A página entrega os estilos em `../assets/ollem-tokens.css` e `../assets/ollem-site.css`; o container, tokens, breakpoints e medidas citados vêm desses arquivos. A captura local dá a composição integral em desktop, mas não registra medidas de viewport do browser, DPR ou estados hover. Use 1366 px como largura de referência para reconstrução da captura e valide visualmente com nova captura; medidas não explicitadas aqui devem ser aferidas no browser na mesma largura.
