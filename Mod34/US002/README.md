# M34 - Projeto final

# US002 - Login na plataforma

Este é o repositório para automação de projetos Web, desenvolvido para trabalhar com Cypress.

## Table of Contents

1. [Goal](#goal)
2. [Project Structure](#project-structure)
3. [Initial Setup](#initial-setup)
4. [Run Automation](#run-automation)

## Goal

O objetivo deste repositório é ser de fácil entendimento focado no desenvolvimento de testes automatizados para Web, utilizando o [Cypress](https://www.cypress.io/), ferramenta desenvolvida em linguagem JavaScript que proporciona rapidez, facilidade e confiabilidade na Os testes.

A arquitetura desenvolvida para este projeto atende a necessidade de centralizar apenas um único BDD (Behavior Driven Development).

Este projeto pode ser executado nos navegadores Chrome, Firefox e Edge

## Run tests

### Initial Setup

1. Requer node. Para instalar, execute `npm install node` ou baixe [Node](https://nodejs.org/en/download/)
2. Execute o comando `npm install` para instalar dependências

### Run Tests

- Execute um dos comandos abaixo para executar os testes.
  Exemplos:
- Para executar todos os testes, execute `npm run test`
- Para rodar testes abrindo a interface do Cypress, execute `npm run cy:open`
- Para executar testes sem abrir a interface do Cypress, execute `npm run cy:run`
- Para gerar os Relatórios do Mochawesome, execute `npm run cy:report`
- Para rodar os testes gerando os Allure Reports, execute `npm run test:allure`
- Para gerar os Allure Reports, execute `npm run allure:open`
- Para executar testes criando o Dashboard do Cypress, execute `npm run cy:dashboard`
<p>
