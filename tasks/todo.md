# Tarefas — Modernização do portfólio

## Tarefa 1: Preparar aplicação React/Vite/TypeScript e build de Pages

**Descrição:** Criar a base React, Vite e TypeScript preservando assets úteis e metadados essenciais. Configurar o `base` para o subdiretório `/Portfolio/` e alterar o workflow existente para compilar a aplicação e enviar `dist/` ao GitHub Pages.

**Critérios de aceitação:**
- [ ] A aplicação React é servida localmente pelo Vite e produz um build estático.
- [ ] O caminho público `/Portfolio/` carrega scripts, estilos e imagens sem 404.
- [ ] O workflow do GitHub Pages instala dependências, executa build e publica somente o artefato `dist/`.

**Verificação:**
- [ ] Executar o comando de build do projeto.
- [ ] Validar localmente a página inicial e os caminhos dos assets com a mesma base usada em Pages.
- [ ] Confirmar que o workflow YAML aponta para a saída `dist/`.

**Dependências:** Nenhuma.

**Arquivos prováveis:** `package.json`, configuração Vite/TypeScript, `index.html`, workflow em `.github/workflows/` ou `deploy.yml`.

**Escopo estimado:** Médio (3–5 arquivos).

## Tarefa 2: Inicializar Lightswind seletivamente e validar a integração

**Descrição:** Rodar a inicialização oficial do Lightswind no app React, confirmar a versão Tailwind suportada no projeto gerado e selecionar apenas componentes que agreguem à navegação, perfil, faixa de competências ou microinterações. Revisar código, imports, telemetria, licença, dependências transitivas e movimento reduzido.

**Critérios de aceitação:**
- [ ] CLI e configuração gerada funcionam no projeto e não deixam conflito de versão/configuração do Tailwind.
- [ ] Cada componente adotado está copiado/localizado no projeto; não há import de componente por entrypoint runtime genérico.
- [ ] Dependências, chamadas de rede, avisos de licença e alternativa sem animação foram documentados/revisados antes de uso.

**Verificação:**
- [ ] Inspecionar a árvore de imports dos componentes adicionados.
- [ ] Executar type-check/build depois da inclusão.
- [ ] Testar ao menos uma experiência em `prefers-reduced-motion`.

**Dependências:** Tarefa 1.

**Arquivos prováveis:** Configuração Tailwind, `components/lightswind/`, utilitários compartilhados e manifestos de dependências.

**Escopo estimado:** Médio (3–5 arquivos, podendo crescer se o CLI gerar mais arquivos; remover componentes dispensáveis).

## Tarefa 3: Construir navegação, hero, tema e resumo

**Descrição:** Entregar a primeira experiência completa: cabeçalho com links por âncora, alternância de tema, hero com posicionamento e foto reais, ações para projetos/contato e resumo com indicadores verificados.

**Critérios de aceitação:**
- [ ] Os links de navegação apontam para seções existentes e a versão mobile possui alternativa acessível.
- [ ] Hero usa apenas nome, cargos, contatos e imagem reais; nenhuma disponibilidade ou currículo é presumida.
- [ ] Tema respeita preferência inicial do sistema, persiste escolha e possui foco/estado acessível.

**Verificação:**
- [ ] Testar navegação e alternância de tema com teclado.
- [ ] Conferir ações e links no navegador.
- [ ] Verificar hero em 320 px, 768 px e desktop.

**Dependências:** Tarefas 1 e 2.

**Arquivos prováveis:** `src/App.tsx`, componentes de navegação/hero, dados pessoais e estilos globais.

**Escopo estimado:** Médio (3–5 arquivos).

## Tarefa 4: Organizar atuação, competências e conquistas

**Descrição:** Reestruturar resumo, competências e resultados profissionais para leitura escaneável, transformando a lista atual em grupos coerentes com a atuação em produto, IA, estratégia, dados e pagamentos.

**Critérios de aceitação:**
- [ ] Conquistas +30%, 25% e 98% são apresentadas com seus contextos, sem animar ou sugerir precisão adicional.
- [ ] Competências são agrupadas por tema e não duplicam certificações.
- [ ] Seções permanecem legíveis sem animação e não dependem apenas da cor para comunicar informação.

**Verificação:**
- [ ] Conferir os textos comparando-os com o conteúdo atual do projeto.
- [ ] Executar type-check/build e testar o fluxo de teclado.

**Dependências:** Tarefa 3.

**Arquivos prováveis:** componentes de resumo/atuação, arquivo tipado de conteúdo e estilos.

**Escopo estimado:** Médio (3–5 arquivos).

## Tarefa 5: Publicar projetos e trajetória profissional

**Descrição:** Reapresentar HungryGo e Menu Digital Pro como estudos de caso/projetos e a experiência real em uma linha do tempo responsiva, usando destinos existentes e sem inventar capturas, clientes ou resultados.

**Critérios de aceitação:**
- [ ] Os dois projetos têm descrição, tecnologias e links existentes e válidos.
- [ ] Experiências aparecem em ordem cronológica coerente e conservam cargos/datas/realizações da fonte.
- [ ] Cartões e linha do tempo funcionam por teclado, toque e redução de movimento.

**Verificação:**
- [ ] Abrir links externos e conferir `target`/proteções quando aplicável.
- [ ] Conferir leitura em desktop e celular e executar build.

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

**Descrição:** Fechar o acabamento técnico e visual em breakpoints definidos, verificando semântica, contraste, navegação, estados, preferência de movimento, metadados e publicação real em GitHub Pages.

**Critérios de aceitação:**
- [ ] Layout não transborda e mantém hierarquia em 320, 768, 1024 e 1440 px.
- [ ] Links, controles e conteúdo principal são utilizáveis por teclado; animações respeitam `prefers-reduced-motion`.
- [ ] Metadados, canonical, Open Graph e URLs de assets refletem o endereço de publicação atual.
- [ ] Build/testes passam e o artefato publicado carrega sob `/Portfolio/`.

**Verificação:**
- [ ] Executar testes focados, type-check e build de produção.
- [ ] Fazer inspeção visual nos quatro breakpoints e verificar console/rede.
- [ ] Acompanhar uma execução do workflow de Pages e confirmar a URL publicada.

**Dependências:** Tarefas 1–7.

**Arquivos prováveis:** `index.html`, workflow de Pages, componentes e estilos responsivos, testes.

**Escopo estimado:** Médio (3–5 arquivos; dividir achados adicionais em correções específicas).

## Checkpoint: Após tarefas 1–2
- [ ] Base Vite publica corretamente no subdiretório do GitHub Pages.
- [ ] Integração Lightswind foi limitada, revisada e compila.
- [ ] Revisar a direção visual antes de migrar o restante das seções.

## Checkpoint: Após tarefas 3–5
- [ ] Hero, navegação, conteúdo central, projetos e experiência funcionam juntos.
- [ ] Conteúdo factual e principais CTAs foram revistos pelo titular.

## Checkpoint: Conclusão
- [ ] Tarefas e critérios de aceitação completos.
- [ ] Testes, type-check/build e verificação de Pages passaram.
- [ ] Versões responsivas e acessíveis aprovadas.
