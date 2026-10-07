# Portfólio — Alessander Dutra

Portfólio profissional de Alessander Dutra, com foco em gestão de produtos digitais, inteligência artificial generativa e estratégia.

Site publicado: [alessander-dutra.github.io/Portfolio](https://alessander-dutra.github.io/Portfolio)

## Tecnologias

- React 19
- TypeScript
- Vite
- CSS responsivo
- Vitest e Testing Library

## Executar localmente

Requer Node.js 20.19+ ou 22.12+.

```bash
npm install
npm run dev
```

O servidor local usa a base `/Portfolio/`, a mesma do endereço de GitHub Pages.

## Verificar e gerar build

```bash
npm test
npm run build
```

O build de produção é gerado em `dist/`. A publicação atual permanece na raiz estática enquanto a migração para React é concluída; o workflow de Pages será atualizado no ponto de validação final descrito no [plano de modernização](./tasks/plan.md).

## Estrutura

- `app/` — aplicação React/Vite e seus metadados.
- `app/src/components/` — componentes das seções do portfólio.
- `assets/img/` — imagens existentes do portfólio.
- `css/`, `js/`, `index.html` — versão estática atualmente publicada durante a migração.
- `tasks/` — plano e checklist de implementação.

## Lightswind UI

O repositório Lightswind foi analisado como fonte de componentes, mas a aplicação inicial não importa o pacote runtime nem executa a CLI `init`: a versão inspecionada inclui caminhos de telemetria e instalação ampla. A integração poderá ser reconsiderada por componente após revisão de código, dependências e chamadas de rede.
