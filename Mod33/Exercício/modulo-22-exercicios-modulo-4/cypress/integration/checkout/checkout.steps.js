/// <reference types="cypress" />

import { Dado, Quando, Então } from 'cypress-cucumber-preprocessor/steps'
const { pedidosPage } = require('../../support/page_objects')
const dadosProdutos = require('../fixtures/prodRequest.json')
const dadosLogin = require('../fixtures/perfil.json')

Dado('Eu Adicione um produto no carrinho', () => {
    cy.addProduct(dadosProdutos.size, dadosProdutos.color, dadosProdutos.quantity,
        dadosProdutos.add_cart, dadosProdutos.product_id, dadosProdutos.variation_id)
})

Quando('Eu termino o pedido', () => {
    cy.placeOrder(dadosLogin.usuario, dadosLogin.senha)
})

Então('Devo ver uma mensagem de sucesso', () => {
    pedidosPage.mensagem.should('contain', 'Obrigado. Seu pedido foi recebido.')
})
