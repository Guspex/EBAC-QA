/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
const {checkoutPage, EnderecoPage} = require('../../support/pages')

Given('i chose a produtc in ebac webstore ', () => {
    cy.visit('/')
})
When("i select the type, measure and color and click on the button buy and see your car", () => {
    cy.get('#size')
    cy.get('#color')
    cy.get('button[type=submit]').as('Comprar')
    cy.get('button[type=submit]').as('Ver carrinho')
    cy.get('.checkout-button button alt wc-forward')
})
Then('the checkout dashboard page should be visible and i must fill the forms', () => {
    checkoutPage.siteName.should("be.visible")
    EnderecoPage.editarEndFat(data.nome, data.sobrenome, data.empresa, data.pais, data.end1, data.end2, data.cidade, data.estado, data.zip, data.fone, data.email)
    cy.get('#order_comments').click().type("Estou muito feliz com a minha compra, entreguem ela com carinho.")
    cy.get('#terms').click()
    cy.get('#place_order').click()
    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    expect('.woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received', ("content", 'Obrigado. Seu pedido foi recebido.')).to.exist;
})