# Playwright: testes E2E e de API

[![Playwright - E2E e API](https://github.com/Guspex/EBAC-QA/actions/workflows/playwright.yml/badge.svg)](https://github.com/Guspex/EBAC-QA/actions/workflows/playwright.yml)

Projeto de automação com **Playwright + TypeScript** que cobre duas camadas de uma aplicação pública, rodando em **integração contínua no GitHub Actions**:

| Camada | Sistema sob teste | O que é validado |
|---|---|---|
| **E2E (Web)** | [Sauce Demo](https://www.saucedemo.com) | Login, vitrine (ordenação, carrinho) e fluxo de compra com regras de cálculo |
| **API (REST)** | [ServeRest](https://serverest.dev) | Usuários, login e produtos: status, mensagens, contrato, autenticação e autorização |

## Estratégia de testes

- **Pirâmide de testes:** a maior parte das regras (validações, autenticação, permissões) é coberta na camada de **API**, que é rápida e estável. A camada **E2E** fica com as jornadas críticas do usuário.
- **Suítes por tag:**
  - `@smoke` reúne os caminhos críticos, usados para validar rapidamente um deploy ou hotfix.
  - `@regression` reúne os cenários negativos, de borda e regras de negócio.
- **Page Object Model** (`pages/`) e **fixtures** (`support/fixtures.ts`): os testes descrevem comportamento, e os seletores ficam isolados em um só lugar.
- **Massa de testes própria:** cada execução gera dados únicos (`support/factories.ts`) e apaga o que criou, sem depender de dados pré-existentes e sem poluir o ambiente.
- **Validação de regra de negócio:** o checkout confere se `subtotal = soma dos itens` e `total = subtotal + imposto`, além do fluxo visual.
- **Investigação de falhas:** em caso de erro, o CI guarda **trace, screenshot e vídeo** no relatório HTML, e os testes são reexecutados até 2 vezes para diferenciar falha real de instabilidade.

## Estrutura

```
Playwright/
├── pages/                 # Page Objects do Sauce Demo
├── support/
│   ├── fixtures.ts        # Injeta Page Objects e cliente de API nos testes
│   ├── serverest.ts       # Cliente da API ServeRest
│   ├── factories.ts       # Geração de massa de testes
│   └── users.ts           # Usuários de teste do Sauce Demo
├── tests/
│   ├── e2e/               # login, vitrine, compra
│   └── api/               # usuarios, login, produtos
└── playwright.config.ts   # Projetos "e2e" e "api", retries, reporters
```

## Como executar

```bash
cd Playwright
npm ci
npx playwright install chromium

npm test                  # tudo
npm run test:e2e          # somente Web
npm run test:api          # somente API
npm run test:smoke        # suíte rápida (@smoke)
npm run test:regression   # suíte de regressão
npm run report            # abre o relatório HTML
```

Para rodar a API contra uma **ServeRest local**, sem depender da instância pública:

```bash
npm run api:local                                  # em um terminal
API_URL=http://localhost:3000 npm run test:api     # em outro
```

## Integração contínua

O workflow [`.github/workflows/playwright.yml`](../.github/workflows/playwright.yml) roda:

- a cada **push/PR** que altere o projeto;
- **diariamente** nos dias úteis, como monitoramento dos sistemas sob teste;
- **manualmente** (aba *Actions → Run workflow*), escolhendo a suíte `todos`, `smoke` ou `regression`.

As camadas E2E e API rodam em **jobs paralelos**. Ao final, os relatórios HTML e JUnit ficam disponíveis como *artifacts* da execução.
