# Tarefas — Modernização do portfólio

## Tarefa 1: Preparar aplicação React/Vite/TypeScript e build de Pages

**Descrição:** Criar a base React, Vite e TypeScript preservando metadados essenciais. Configurar o `base` para o subdiretório `/Portfolio/` e gerar `dist/`. Manter os arquivos estáticos atuais até a nova experiência estar completa; criar e ativar o workflow real de publicação na validação final, após confirmar a origem de Pages.

**Critérios de aceitação:**
- [x] A aplicação React é servida localmente pelo Vite e produz um build estático.
- [x] O caminho público `/Portfolio/` carrega scripts e estilos sem 404.
- [x] O build inclui os arquivos esperados sob `/Portfolio/` sem alterar a publicação ativa durante a migração.

**Verificação:**
- [x] Executar `npm run build`.
- [x] Validar no navegador a página inicial em `http://127.0.0.1:5173/Portfolio/`.
- [x] Confirmar que a saída `dist/` e os caminhos base estão corretos; a troca do workflow será verificada na tarefa 8.

**Dependências:** Nenhuma.

**Arquivos prováveis:** `package.json`, configuração Vite/TypeScript e `app/index.html`. O `deploy.yml` está na raiz, não no diretório de workflows do GitHub Actions.

**Escopo estimado:** Médio (3–5 arquivos).

## Tarefa 2: Auditar Lightswind e decidir limites seguros de integração

**Descrição:** Revisar CLI, entrypoint, utilitário compartilhado e componentes candidatos do Lightswind antes de executar código externo. A inspeção da versão consultada mostrou que `init` instala a coleção toda, `src/components/lib/utils.ts` importa o pacote runtime com telemetria, e o alternador de tema avaliado depende de `document.startViewTransition` sem fallback. Para a primeira fatia, usar UI React/CSS própria e não adicionar a dependência; reconsiderar componente local apenas após auditoria do caminho de imports.

**Critérios de aceitação:**
- [x] A ação da CLI e a configuração Tailwind indicadas no README foram comparadas com o código da versão consultada; a instalação ampla foi descartada.
- [x] O utilitário e o alternador de tema candidatos foram inspecionados; a primeira fatia não importa o pacote runtime nem adiciona dependências Lightswind.
- [x] Riscos de telemetria, rede, licença e acessibilidade foram registrados no plano; a UI própria respeita `prefers-reduced-motion`.

**Verificação:**
- [x] Inspecionar o entrypoint, CLI, utilitário compartilhado e tema na versão de código consultada.
- [x] Confirmar que o projeto não depende nem importa `lightswind`.
- [x] Executar type-check/build sem adicionar plugin ou dependências do Lightswind.

**Dependências:** Tarefa 1.

**Arquivos prováveis:** Nenhum código de biblioteca copiado nesta fatia; decisão registrada em `tasks/plan.md`.

**Escopo estimado:** Pequeno (auditoria somente leitura).

## Tarefa 3: Construir navegação, hero, tema e resumo

**Descrição:** Entregar a primeira experiência completa: cabeçalho com links por âncora, alternância de tema, hero com posicionamento e foto reais, ações para projetos/contato e resumo com indicadores verificados.

**Critérios de aceitação:**
- [x] Os links de navegação apontam para seções existentes e a versão mobile possui alternativa acessível.
- [x] Hero usa apenas nome, cargos, contatos e imagem reais; nenhuma disponibilidade ou currículo é presumida.
- [x] Tema respeita preferência inicial do sistema, persiste escolha e possui foco/estado acessível.

**Verificação:**
- [x] Testar navegação e alternância de tema com teclado.
- [x] Conferir a navegação, hierarquia visual, foto e destinos exibidos no navegador local.
- [x] Verificar responsividade e ausência de rolagem horizontal em 320 px, 390 px, 768 px, 1024 px e 1440 px.

**Dependências:** Tarefas 1 e 2.

**Arquivos prováveis:** `src/App.tsx`, componentes de navegação/hero, dados pessoais e estilos globais.

**Escopo estimado:** Médio (3–5 arquivos).

## Tarefa 4: Organizar atuação, competências e conquistas

**Descrição:** Reestruturar resumo, competências e resultados profissionais para leitura escaneável, transformando a lista atual em grupos coerentes com a atuação em produto, IA, estratégia, dados e pagamentos.

**Critérios de aceitação:**
- [x] Conquistas +30%, 25% e 98% são apresentadas com seus contextos, sem animar ou sugerir precisão adicional.
- [x] Competências são agrupadas por tema e não duplicam certificações.
- [x] Seções permanecem legíveis sem animação e não dependem apenas da cor para comunicar informação.

**Verificação:**
- [x] Conferir os textos comparando-os com o conteúdo atual do projeto.
- [x] Executar type-check/build, testes e testar o fluxo de teclado.

**Dependências:** Tarefa 3.

**Arquivos prováveis:** componentes de resumo/atuação, arquivo tipado de conteúdo e estilos.

**Escopo estimado:** Médio (3–5 arquivos).

## Tarefa 5: Publicar projetos e trajetória profissional

**Descrição:** Reapresentar HungryGo e Menu Digital Pro como estudos de caso/projetos e a experiência real em uma linha do tempo responsiva, usando destinos existentes e sem inventar capturas, clientes ou resultados.

**Critérios de aceitação:**
- [x] Os dois projetos têm descrição, tecnologias e links existentes e válidos.
- [x] Experiências aparecem em ordem cronológica coerente e conservam cargos/datas/realizações da fonte.
- [x] Cartões e linha do tempo funcionam por teclado, toque e redução de movimento.

**Verificação:**
- [x] Conferir destinos externos, `target` e proteção `rel="noreferrer"` nos links dos projetos.
- [x] Conferir as seções em desktop e celular, testar preferência de movimento reduzido e executar testes/build.

**Dependências:** Tarefa 4.

**Arquivos prováveis:** componentes de projetos/experiência, conteúdo tipado e estilos.

**Escopo estimado:** Médio (3–5 arquivos).

## Tarefa 6: Integrar formação, certificações e publicações

**Descrição:** Migrar formação, certificações e publicações para seções compactas. Corrigir a duplicidade do título “Publicações” e evitar que a lista extensa de cursos domine a página.

**Critérios de aceitação:**
- [ ] Formação, datas e instituições correspondem ao conteúdo atual confirmado.
- [ ] Certificações são agrupadas/limitadas com mecanismo acessível para expandir o restante, caso necessário.
- [ ] Cada publicação aparece uma vez, com título, data e destino válido.

**Verificação:**
- [ ] Conferir os nomes e links de origem.
- [ ] Testar expandir/recolher com teclado e leitor de tela.
- [ ] Executar build.

**Dependências:** Tarefa 5.

**Arquivos prováveis:** componentes acadêmicos/publicações, conteúdo tipado e estilos.

**Escopo estimado:** Médio (3–5 arquivos).

## Tarefa 7: Integrar recomendações, contato e rodapé

**Descrição:** Exibir recomendações verdadeiras com atribuição autorizada, preservar canais diretos atuais e criar rodapé conciso com navegação funcional. Não implantar formulário até que um serviço de envio real seja configurado.

**Critérios de aceitação:**
- [ ] Recomendações preservam texto e autoria confirmados e autorizados.
- [ ] Email, LinkedIn e WhatsApp apontam para os destinos corretos; nenhum `href="#"` é usado como ação.
- [ ] A página não afirma que uma mensagem foi enviada sem integração real; currículo só aparece quando o arquivo existir.

**Verificação:**
- [ ] Testar cada ação de contato e links internos no navegador.
- [ ] Verificar foco, rótulos e estados do formulário caso uma integração seja aprovada.
- [ ] Executar build.

**Dependências:** Tarefas 3 e 6.

**Arquivos prováveis:** componentes de recomendações/contato/rodapé, dados de contato e estilos.

**Escopo estimado:** Médio (3–5 arquivos).

## Tarefa 8: Validar acessibilidade, responsividade, SEO e publicação

**Descrição:** Fechar o acabamento técnico e visual em breakpoints definidos, verificando semântica, contraste, navegação, estados, preferência de movimento, metadados e publicação real em GitHub Pages. Neste estágio, confirmar a origem atual, criar o workflow em `.github/workflows/` e configurar Pages para publicar `dist/` quando necessário.

**Critérios de aceitação:**
- [ ] Layout não transborda e mantém hierarquia em 320, 768, 1024 e 1440 px.
- [ ] Links, controles e conteúdo principal são utilizáveis por teclado; animações respeitam `prefers-reduced-motion`.
- [ ] Metadados, canonical, Open Graph e URLs de assets refletem o endereço de publicação atual.
- [ ] Workflow real instala dependências, executa testes/type-check/build e publica `dist/` sob `/Portfolio/`; a origem de Pages foi conferida.
- [ ] Build/testes passam e o artefato publicado carrega sob `/Portfolio/`.

**Verificação:**
- [ ] Executar testes focados, type-check e build de produção.
- [ ] Fazer inspeção visual nos quatro breakpoints e verificar console/rede.
- [ ] Acompanhar uma execução do workflow de Pages e confirmar a URL publicada.

**Dependências:** Tarefas 1–7.

**Arquivos prováveis:** `app/index.html`, workflow `.github/workflows/deploy.yml`, componentes e estilos responsivos, testes.

**Escopo estimado:** Médio (3–5 arquivos; dividir achados adicionais em correções específicas).

## Checkpoint: Após tarefas 1–2
- [ ] Base Vite publica corretamente no subdiretório do GitHub Pages.
- [x] A decisão de não adotar dependências Lightswind com telemetria implícita foi revisada e documentada.
- [ ] Revisar a direção visual antes de migrar o restante das seções.

## Checkpoint: Após tarefas 3–5
- [ ] Hero, navegação, conteúdo central, projetos e experiência funcionam juntos.
- [ ] Conteúdo factual e principais CTAs foram revistos pelo titular.

## Checkpoint: Conclusão
- [ ] Tarefas e critérios de aceitação completos.
- [ ] Testes, type-check/build e verificação de Pages passaram.
- [ ] Versões responsivas e acessíveis aprovadas.
