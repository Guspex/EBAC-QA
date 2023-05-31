/// <reference types="cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
const { produtoPage, carrinhoPage } = require('../../../support/page_objects')
const produto = require('../../../fixtures/produtos.json')


Given('I am at the product page', () => {
    cy.visit("produtos/")
})

When('I add the product to the cart', () => {
    produtoPage.inserirProduto(produto[3].produto, produto[3].tamanho, produto[3].cor, produto[3].quantidade)
})

And
('I go to the cart', () => {
    produtoPage.clicarBotaoCarrinho()
})

Then('I should see the product in the cart', () => {
    carrinhoPage.validateProduct()
})