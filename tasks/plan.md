# Plano de modernização do portfólio

## Visão geral

Modernizar o portfólio de Alessander Dutra para uma experiência de página única inspirada na organização e nas interações do site de referência, preservando identidade, trajetória e conteúdo verificáveis do projeto atual. A implementação será migrada de HTML/CSS/JavaScript estático para React, Vite e TypeScript, com uso seletivo de componentes Lightswind locais e publicação compatível com GitHub Pages.

## Diagnóstico e referências

### Site de referência

O site público organiza o conteúdo nesta sequência: navegação compacta e alternância de tema; hero com apresentação, ações e cartão de perfil; faixa de tecnologias; resumo com indicadores; áreas de atuação; projetos; trajetória profissional; formação e competências; depoimentos; contato; rodapé. A navegação aponta para âncoras da própria página. O estilo é contemporâneo, com composição editorial, elementos de perfil interativos, cartões de projetos, tema escuro e animações.

O conteúdo publicado também tem sinais de template que não devem ser reproduzidos como fatos: nome, empresas, formação, clientes, projetos, métricas e depoimentos pertencem à persona fictícia da demonstração; há links sociais `#` e a página apresentou avisos de carregamento de fonte. A referência será usada para estudar hierarquia, ritmo, navegação e padrões de interação, não para copiar sua marca, layout literal ou conteúdo.

### Projeto atual

- O conteúdo está concentrado em `index.html`, com CSS em `css/style.css` e JavaScript em `js/main.js`; não há `package.json`, aplicação React, testes ou build de frontend configurado.
- Já existem resumo, conquistas, competências, experiência, projetos, formação, certificações, publicações, recomendações, redes sociais e informações de contato. O conteúdo de origem deve ser reaproveitado e revisado, não substituído pelo conteúdo fictício do exemplo.
- O documento repete a seção “Publicações”, apresenta grande volume de certificações/competências e não contém um formulário de contato funcional nem um arquivo de currículo PDF no repositório.
- `deploy.yml` publica atualmente a raiz do repositório sem build. A aplicação Vite precisará gerar `dist/` e o workflow deverá publicar essa pasta; como o endereço de GitHub Pages usa o caminho `/Portfolio/`, o `base` do Vite e os caminhos dos assets precisarão respeitar esse subdiretório.

### Lightswind UI Library

- A biblioteca distribui componentes React como código local por CLI; o README recomenda `npx lightswind@latest init`, seguido da inclusão seletiva de componentes. Ela declara compatibilidade com React 18/19, Node.js 18+ e Tailwind CSS v3/v4.
- Candidatos úteis para avaliar: navegação/alternância de tema, cartões, contador, faixa de tecnologias e efeitos de entrada/revelação. A escolha final deverá privilegiar leitura, acessibilidade e performance, evitando animações decorativas em excesso.
- O README descreve uma abordagem de componentes-fonte editáveis e dependências específicas por componente; portanto, não importar componentes de um pacote runtime genérico nem adicionar animação/3D sem necessidade.
- Foi identificado em `src/index.ts` do repositório Lightswind um envio de telemetria com o hostname ao importar o entrypoint do pacote, limitado por armazenamento local; `trackComponent` também tem lógica de envio. Antes de adotar qualquer componente ou dependência transitiva, revisar o código realmente gerado e o caminho de imports. Não importar o entrypoint do pacote no site publicado sem uma decisão informada de privacidade.
- A inicialização automática do Tailwind precisa ser inspecionada no projeto gerado e validada com a versão escolhida; não assumir que um exemplo de configuração para Tailwind v3 serve sem ajustes para v4.
- MCP é opcional para o site e não faz parte do escopo inicial. A licença MIT e os avisos de atribuição aplicáveis aos arquivos selecionados deverão ser preservados.

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
- Usar componentes locais Lightswind apenas onde resolverem uma necessidade visual/funcional real; componentes genéricos e seções editoriais podem ser implementados com componentes React próprios.
- Centralizar informações pessoais e listas repetidas em dados tipados, facilitando atualização e revisão factual.
- Separar componentes por seção para manter escopo e testes manejáveis.
- Configurar build com `base` alinhado ao caminho `/Portfolio/` e upload de `dist/` no workflow de Pages.
- Validar licença, conteúdo gerado, dependências e qualquer comportamento de rede dos imports selecionados antes de publicar.

## Plano de tarefas

O checklist detalhado, com critérios de aceitação, verificação, dependências e escopo, está em [`todo.md`](./todo.md).

### Fase 1 — Fundação
- [ ] Tarefa 1: Preparar aplicação React/Vite/TypeScript e build para GitHub Pages.
- [ ] Tarefa 2: Inicializar Lightswind de forma seletiva e validar integração, dependências e privacidade.

### Ponto de controle — Fundação
- [ ] Aplicação inicia localmente, build gera `dist/` e URL base de Pages é testada.
- [ ] Componentes selecionados e seus imports/dependências foram inspecionados.

### Fase 2 — Apresentação e conteúdo central
- [ ] Tarefa 3: Construir navegação, hero, tema e resumo com indicadores reais.
- [ ] Tarefa 4: Organizar atuação, competências e conquistas.
- [ ] Tarefa 5: Publicar projetos e trajetória profissional com conteúdo atual.

### Ponto de controle — Conteúdo central
- [ ] Principais âncoras, ações e seções funcionam em desktop e celular.
- [ ] Conteúdo pessoal foi conferido e nenhum link provisório foi publicado.

### Fase 3 — Complementos e acabamento
- [ ] Tarefa 6: Integrar formação, certificações e publicações sem duplicação.
- [ ] Tarefa 7: Integrar recomendações, contato e rodapé com canais válidos.
- [ ] Tarefa 8: Validar acessibilidade, responsividade, SEO, build e publicação.

### Ponto de controle — Entrega
- [ ] Build e testes passam; fluxo de navegação e contatos foi verificado.
- [ ] O artefato de GitHub Pages contém os arquivos de `dist/` e funciona sob `/Portfolio/`.
- [ ] Versões desktop e mobile respeitam contraste, teclado e preferência de movimento reduzido.

## Riscos e mitigação

| Risco | Impacto | Mitigação |
|---|---|---|
| Migração quebra o endereço existente no GitHub Pages | Alto | Configurar e testar o `base` `/Portfolio/`; atualizar o workflow para publicar `dist/`. |
| Conteúdo do template de referência é confundido com biografia real | Alto | Manter somente informações existentes e exigir revisão do titular antes da publicação. |
| Código/dependência Lightswind inclui telemetria ou efeitos excessivos | Médio | Selecionar por CLI, inspecionar imports e código gerado, evitar o entrypoint runtime e remover componentes sem valor claro. |
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
