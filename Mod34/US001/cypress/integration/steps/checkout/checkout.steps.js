/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const { pedidosPage } = require('../../../support/page_objects')
const product = require('../../../fixtures/prodRequest.json')
const login = require('../../../fixtures/perfil.json')

Given('I have added a product in the cart', () => {
    cy.addProduct(product.size, product.color, product.quantity, product.add_cart,
        product.product_id, product.variation_id)
})

When('I finish the order', () => {
    cy.placeOrder(login.user, login.pass)
})

Then('I should see a message of success on placing the order', () => {
    pedidosPage.validateOrderPlaced()
})