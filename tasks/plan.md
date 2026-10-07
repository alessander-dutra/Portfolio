# Plano de modernização do portfólio

## Visão geral

Modernizar o portfólio de Alessander Dutra para uma experiência de página única inspirada na organização e nas interações do site de referência, preservando identidade, trajetória e conteúdo verificáveis do projeto atual. A implementação será migrada de HTML/CSS/JavaScript estático para React, Vite e TypeScript. A biblioteca Lightswind será avaliada por componente; o site não adotará automaticamente dependências ou imports que tragam telemetria ou comportamento de rede inesperado. A publicação continuará compatível com GitHub Pages.

## Diagnóstico e referências

### Site de referência

O site público organiza o conteúdo nesta sequência: navegação compacta e alternância de tema; hero com apresentação, ações e cartão de perfil; faixa de tecnologias; resumo com indicadores; áreas de atuação; projetos; trajetória profissional; formação e competências; depoimentos; contato; rodapé. A navegação aponta para âncoras da própria página. O estilo é contemporâneo, com composição editorial, elementos de perfil interativos, cartões de projetos, tema escuro e animações.

O conteúdo publicado também tem sinais de template que não devem ser reproduzidos como fatos: nome, empresas, formação, clientes, projetos, métricas e depoimentos pertencem à persona fictícia da demonstração; há links sociais `#` e a página apresentou avisos de carregamento de fonte. A referência será usada para estudar hierarquia, ritmo, navegação e padrões de interação, não para copiar sua marca, layout literal ou conteúdo.

### Projeto atual

- O conteúdo está concentrado em `index.html`, com CSS em `css/style.css` e JavaScript em `js/main.js`; não há `package.json`, aplicação React, testes ou build de frontend configurado.
- Já existem resumo, conquistas, competências, experiência, projetos, formação, certificações, publicações, recomendações, redes sociais e informações de contato. O conteúdo de origem deve ser reaproveitado e revisado, não substituído pelo conteúdo fictício do exemplo.
- O documento repete a seção “Publicações”, apresenta grande volume de certificações/competências e não contém um formulário de contato funcional nem um arquivo de currículo PDF no repositório.
- `deploy.yml` está na raiz, fora de `.github/workflows/`, portanto não será tratado como workflow ativo do GitHub Actions. A origem atual do Pages deve ser confirmada antes da troca. Ao fim da migração, será criado/configurado um workflow real para compilar e publicar `dist/`; como o endereço usa `/Portfolio/`, o `base` do Vite e os caminhos dos assets precisam respeitar esse subdiretório.
- Para não substituir a página servida por uma versão incompleta durante a migração, o workflow real e a troca da origem de publicação do Pages serão configurados somente no último ponto de controle. Até lá, Vite será validado em paralelo, sem trocar os arquivos publicados.

### Lightswind UI Library

- A biblioteca distribui componentes React como código local por CLI; o README recomenda `npx lightswind@latest init`, seguido da inclusão seletiva de componentes. Ela declara compatibilidade com React 18/19, Node.js 18+ e Tailwind CSS v3/v4.
- Candidatos úteis para avaliar: navegação/alternância de tema, cartões, contador, faixa de tecnologias e efeitos de entrada/revelação. A escolha final deverá privilegiar leitura, acessibilidade e performance, evitando animações decorativas em excesso.
- O README descreve uma abordagem de componentes-fonte editáveis e dependências específicas por componente; portanto, não importar componentes de um pacote runtime genérico nem adicionar animação/3D sem necessidade.
- Foi identificado em `src/index.ts` do repositório Lightswind um envio de telemetria com o hostname ao importar o entrypoint do pacote, limitado por armazenamento local; `trackComponent` também tem lógica de envio. Antes de adotar qualquer componente ou dependência transitiva, revisar o código realmente gerado e o caminho de imports. Não importar o entrypoint do pacote no site publicado sem uma decisão informada de privacidade.
- Na versão do código inspecionada, `src/components/lib/utils.ts` também importa `"lightswind"`; portanto, componentes que usam esse utilitário podem acabar incluindo a telemetria mesmo quando são copiados localmente.
- O entrypoint `init` da CLI inspecionada chama `installAll`, incompatível com a exigência de inclusão seletiva. O componente `toggle-theme` avaliado chama `document.startViewTransition` sem fallback e ainda requer `lucide-react`; não será usado como controle primário de tema.
- A inicialização automática do Tailwind precisa ser inspecionada no projeto gerado e validada com a versão escolhida; não assumir que um exemplo de configuração para Tailwind v3 serve sem ajustes para v4.
- MCP é opcional para o site e não faz parte do escopo inicial. A licença MIT e os avisos de atribuição aplicáveis aos arquivos selecionados deverão ser preservados.
- Decisão da primeira fatia: não executar uma CLI cuja ação `init` instala a coleção completa nem adicionar o pacote runtime. A navegação, o tema e os cartões iniciais serão componentes React/CSS próprios, sem dependências Lightswind, para evitar telemetria, incompatibilidade de configuração e peso sem benefício funcional demonstrado. Componentes Lightswind isolados só serão reconsiderados quando um componente real justificar a integração e seus imports puderem ser revisados.

## Contrato de design proposto

- **Objetivo da página:** apresentar rapidamente o posicionamento de Alessander em gestão de produtos digitais e IA, demonstrar impacto com evidências e direcionar visitantes a projetos ou contato.
- **Ação principal:** “Ver projetos”. Ação secundária: “Entrar em contato”. Só incluir “Baixar currículo” quando um PDF válido for disponibilizado.
- **Estrutura em desktop:** cabeçalho compacto com marca “AD”, âncoras de navegação e controle de tema; hero em duas colunas com apresentação e contatos de um lado e foto/cartão de perfil do outro; faixa discreta de competências; resumo e indicadores; atuação; projetos em destaque; linha do tempo profissional; formação/certificações; publicações/recomendações; contato e rodapé.
- **Estrutura em celular:** navegação recolhível acessível, hero empilhado, cartões em uma coluna, linha do tempo vertical e conteúdo sem rolagem horizontal. A faixa animada poderá virar conteúdo estático sob `prefers-reduced-motion`.
- **Visual:** superfícies neutras, texto em grafite/azul-marinho, acento índigo coerente com o material existente, tipografia legível, bordas e sombras contidas, tema claro/escuro. Evitar gradientes excessivos, contadores ou indicadores de habilidade sem evidência, links sem destino e efeitos que atrapalhem a leitura.
- **Conteúdo:** usar a foto e informações reais do projeto, os resultados já registrados (satisfação +30%, entrega 25% mais rápida, lançamentos 98% sem defeitos) e os projetos identificados (HungryGo e Menu Digital Pro), sujeitos à validação do titular antes de publicar. Não inventar disponibilidade profissional, clientes, números, formação ou depoimentos.
- **Contato:** manter email, LinkedIn e WhatsApp já presentes como canais diretos; só criar envio de formulário após configurar e testar um endpoint real. Nunca mostrar confirmação de envio que não ocorreu.
- **Acessibilidade e movimento:** estrutura de headings sem saltos, foco visível, links/botões nomeados, contraste AA, alternância de tema com estado anunciado, navegação por teclado e respeito a `prefers-reduced-motion`.

## Prévia textual

```text
┌ AD  Alessander Dutra ─── Sobre  Atuação  Projetos  Trajetória  Contato   ◐ ┐
│                                                                            │
│  PRODUCT MANAGER · IA APLICADA       ┌──────────────────────────────────┐  │
│  Produto digital com estratégia,    │ foto real                          │  │
│  experiência e resultado.           │ Alessander Dutra                   │  │
│  Resumo curto com proposta de valor.│ Product Manager · São Paulo, BR    │  │
│  [Ver projetos] [Entrar em contato] └──────────────────────────────────┘  │
│  LinkedIn · GitHub · Email · WhatsApp                                     │
├──────── competências/produtos em faixa discreta (sem logos fictícios) ─────┤
│ Sobre mim                 +30% satisfação | 25% entrega | 98% qualidade   │
│ Áreas de atuação          Estratégia · IA · Go-To-Market · Dados           │
│ Projetos                  HungryGo                         Menu Digital Pro│
│ Trajetória profissional  ─ linha do tempo real                            │
│ Formação e certificações  agrupadas para leitura rápida                   │
│ Publicações / recomendações reais                                         │
│ Contato                   email · LinkedIn · WhatsApp                      │
└────────────── rodapé com navegação e links válidos ────────────────────────┘
```

O desenho é uma direção de conteúdo e hierarquia, não uma reprodução pixel a pixel da referência. A versão final será validada nos breakpoints de 320, 768, 1024 e 1440 px.

## Decisões de arquitetura

- Migrar para React + Vite + TypeScript, preservando a implantação estática em GitHub Pages.
- Reavaliar componentes locais Lightswind por necessidade real; os componentes primários desta migração usam React/CSS próprios, sem importar o pacote runtime, enquanto os riscos de telemetria e instalação não seletiva permanecerem.
- Centralizar informações pessoais e listas repetidas em dados tipados, facilitando atualização e revisão factual.
- Separar componentes por seção para manter escopo e testes manejáveis.
- Configurar build com `base` alinhado ao caminho `/Portfolio/`; somente na etapa final criar o workflow real em `.github/workflows/` e configurar Pages para publicar o artefato completo `dist/`.
- Validar licença, conteúdo gerado, dependências e qualquer comportamento de rede dos imports selecionados antes de publicar.

## Plano de tarefas

O checklist detalhado, com critérios de aceitação, verificação, dependências e escopo, está em [`todo.md`](./todo.md).

### Fase 1 — Fundação
- [x] Tarefa 1: Preparar aplicação React/Vite/TypeScript e build compatível com o caminho do GitHub Pages.
- [x] Tarefa 2: Auditar Lightswind e decidir limites seguros de integração.

### Ponto de controle — Fundação
- [x] Aplicação inicia localmente, build gera `dist/` e URL base de Pages é testada sem substituir a publicação em uso.
- [x] A decisão de adoção, imports, dependências e chamadas de rede foi documentada; não há dependência inesperada.

### Fase 2 — Apresentação e conteúdo central
- [x] Tarefa 3: Construir navegação, hero, tema e resumo com indicadores reais.
- [x] Tarefa 4: Organizar atuação, competências e conquistas.
- [x] Tarefa 5: Publicar projetos e trajetória profissional com conteúdo atual.

### Ponto de controle — Conteúdo central
- [x] Principais âncoras, ações e seções funcionam em desktop e celular; testes automatizados, navegação por teclado e larguras de 320 a 1440 px foram verificados.
- [x] Conteúdo de competências, projetos e trajetória foi conferido com a página estática original; links provisórios não foram introduzidos.

### Fase 3 — Complementos e acabamento
- [ ] Tarefa 6: Integrar formação, certificações e publicações sem duplicação.
- [ ] Tarefa 7: Integrar recomendações, contato e rodapé com canais válidos.
- [ ] Tarefa 8: Validar acessibilidade, responsividade, SEO, build e publicação.

### Ponto de controle — Entrega
- [ ] Build e testes passam; fluxo de navegação e contatos foi verificado.
- [ ] O workflow de Pages publica os arquivos completos de `dist/` e funciona sob `/Portfolio/`.
- [ ] Versões desktop e mobile respeitam contraste, teclado e preferência de movimento reduzido.

## Riscos e mitigação

| Risco | Impacto | Mitigação |
|---|---|---|
| Migração quebra o endereço existente no GitHub Pages | Alto | Configurar e testar o `base` `/Portfolio/`; confirmar a origem atual de publicação e ativar o workflow real apenas após validar o build completo de `dist/`. |
| Conteúdo do template de referência é confundido com biografia real | Alto | Manter somente informações existentes e exigir revisão do titular antes da publicação. |
| Código/dependência Lightswind inclui telemetria ou efeitos excessivos | Médio | Evitar `init` que instala a coleção e o entrypoint runtime; usar React/CSS próprio nesta fatia e reavaliar componentes locais individualmente. |
| Tailwind v3/v4 e plugin CLI geram configurações incompatíveis | Médio | Conferir a configuração real criada pelo CLI; manter uma única versão compatível e testar build desde a fase de fundação. |
| Currículo PDF ou backend do formulário não estão disponíveis | Baixo | Manter contato direto e não exibir ação de currículo/formulário sem destino funcional. |
| Página longa fica difícil de escanear | Médio | Priorizar projetos/impacto, agrupar competências/certificações e reduzir repetições. |

## Questões de conteúdo para confirmar antes da publicação

- Confirmar que métricas, datas, cargos, formação, certificações e recomendações atuais permanecem corretos e podem ser publicados.
- Disponibilizar o PDF do currículo se a ação “Baixar currículo” for desejada.
- Confirmar que email, WhatsApp e os demais destinos sociais publicados continuam corretos.
- Definir um serviço de formulário apenas se for necessário substituir os links diretos de contato.

## Critério de conclusão

O novo site estará pronto quando o conteúdo real estiver revisado, a navegação principal funcionar por teclado e toque, o layout responder nos quatro breakpoints definidos, as preferências de tema/movimento forem respeitadas, não houver links ou envios falsos e o workflow publicar com sucesso o build Vite no caminho existente do GitHub Pages.
