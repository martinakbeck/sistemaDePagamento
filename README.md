# Sistema de Pagamento

Este repositório foi inicialmente utilizado na disciplina de Programação para Automação de Testes, com foco na criação e execução de testes automatizados para um sistema de pagamento. Posteriormente, foi evoluído na disciplina de Integração Contínua, onde foram implementados pipelines de CI utilizando GitHub Actions, permitindo a execução automatizada de lint e testes em diferentes cenários do ciclo de desenvolvimento.

## O que está aqui

- `src/ServicoDePagamento.js`: código do serviço de pagamento.
- `test/servicoPagamento.test.js`: testes automáticos com Playwright.
- `.github/workflows/01-manual-exec.yaml`: roda testes quando você manda executar manualmente.
- `.github/workflows/02-scheduled-exec.yaml`: roda testes automaticamente em horários marcados e também manualmente.
- `.github/workflows/03-post-deploy-exec.yaml`: roda testes de novo depois de um deploy manual bem-sucedido.
- `.github/workflows/04-integrated-exec.yaml`: roda lint e testes a cada `push` para `main` ou `master`.

## Todas as formas de execução

### 1. Com GitHub Actions

A pasta `.github/workflows/` tem quatro arquivos diferentes:

- `Manual`: roda testes quando você executa o workflow manualmente.
- `Agendada`: roda testes em horários marcados e também manualmente.
- `Por deploy`: roda testes depois que o deploy manual termina com sucesso.
- `Integrada`: roda lint e testes automaticamente quando há `push` para `main` ou `master`.

O fluxo do `04-integrated-exec.yaml` faz:

- instalação das dependências
- checagem de código com `yarn run lint`
- execução dos testes com `yarn run test-e2e`
- salvamento do relatório de teste como artefato

### 2. Localmente com npm/yarn

No terminal, use:

```bash
npm install
yarn run lint
yarn run test-e2e
```

### 3. Executando só o lint

```bash
yarn run lint
```

### 4. Executando só os testes de Playwright

```bash
yarn run test-e2e
```