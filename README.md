# Portfólio — Alessander Dutra

Portfólio profissional com foco em produtos digitais, engenharia de produtos e plataformas, inteligência artificial aplicada, dados e estratégia.

Site público: [alessander-dutra.github.io/Portfolio](https://alessander-dutra.github.io/Portfolio)

> A aplicação React/Vite contém a versão modernizada descrita abaixo. O endereço público ainda usa a versão estática até a configuração de publicação do GitHub Pages ser migrada para o build de `dist/`.

## O que o portfólio apresenta

- Apresentação profissional, resumo de carreira e indicadores de resultados.
- Experiência atual como **Software Prod & Plat Eng Specialist na Accenture Brasil**, seguida pelas experiências anteriores na Altec Sistemas e Tecnologia.
- Formação acadêmica em Inteligência Artificial e Machine Learning e formação complementar.
- Competências organizadas em produto, IA generativa, engenharia de software, dados, cloud e liderança.
- 48 cursos e credenciais apresentados com instituição e data; a lista completa é expansível. Links individuais de validação não são exibidos quando não foram fornecidos.
- Projetos recentes:
  - **The Prompt Engineering Playbook for Product Ecosystems** — técnicas, frameworks e aplicações de engenharia de prompts, com acesso ao [NotebookLM](https://notebooklm.google.com/notebook/c4b1bee7-16e7-4f4b-9964-80eeb9ef89ef).
  - **Universo do Machine Learning** — ciclo de vida, abordagens, aplicações e considerações éticas de ML, com acesso ao [NotebookLM](https://notebooklm.google.com/notebook/afc377f1-2806-440f-9183-7a4a359badfc).
- Projetos de produto **HungryGo** e **Menu Digital Pro**, publicações, recomendações e canais de contato.
- Navegação por seções, tema claro/escuro, layout responsivo e suporte à preferência por movimento reduzido.

## Tecnologias

- React 19 e TypeScript
- Vite
- CSS responsivo
- Vitest, jsdom e Testing Library

## Executar localmente

Requer Node.js 20.19+ ou 22.12+.

```bash
npm install
npm run dev
```

O servidor local usa a base `/Portfolio/`, alinhada ao caminho do GitHub Pages.

## Testes e build

```bash
npm test
npm run build
npm run preview
```

O build executa a verificação TypeScript e gera os arquivos de produção em `dist/`. `npm run preview` serve localmente esse build.

## Estrutura

- `app/src/App.tsx` — composição da página e ordem das seções.
- `app/src/components/` — componentes de apresentação, trajetória, formação, competências, projetos, publicações, recomendações e contato.
- `app/src/styles.css` — estilos, temas e breakpoints responsivos.
- `app/` — configuração e metadados da aplicação React/Vite.
- `assets/img/`, `css/`, `js/` e `index.html` — arquivos da versão estática atualmente publicada.
- `tasks/` — plano de modernização e checklist de implementação.

## Publicação

O projeto está preparado para construir o site sob o subcaminho `/Portfolio/`. Antes de substituir a publicação estática, é necessário configurar o GitHub Pages para publicar o conteúdo de `dist/` e validar o workflow de implantação.

## Lightswind UI

O repositório Lightswind foi analisado como referência de componentes. A aplicação não importa o pacote runtime nem executa a CLI `init`, pois a versão inspecionada inclui caminhos de telemetria e instalação ampla. Qualquer adoção futura deve ser avaliada por componente, incluindo dependências e chamadas de rede.
