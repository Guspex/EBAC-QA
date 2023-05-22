"use strict";

var _cypressCucumberPreprocessor = require("@badeball/cypress-cucumber-preprocessor");

/// <reference types="cypress" />
var _require = require('../../support/pages'),
    checkoutPage = _require.checkoutPage,
    EnderecoPage = _require.EnderecoPage;

(0, _cypressCucumberPreprocessor.Given)('i chose a produtc in ebac webstore ', function () {
  cy.visit('/');
});
(0, _cypressCucumberPreprocessor.When)("i select the type, measure and color and click on the button buy and see your car", function () {
  cy.get('#size');
  cy.get('#color');
  cy.get('button[type=submit]').as('Comprar');
  cy.get('button[type=submit]').as('Ver carrinho');
  cy.get('.checkout-button button alt wc-forward');
});
(0, _cypressCucumberPreprocessor.Then)('the checkout dashboard page should be visible and i must fill the forms', function () {
  checkoutPage.siteName.should("be.visible");
  EnderecoPage.editarEndFat(data.nome, data.sobrenome, data.empresa, data.pais, data.end1, data.end2, data.cidade, data.estado, data.zip, data.fone, data.email);
  cy.get('#order_comments').click().type("Estou muito feliz com a minha compra, entreguem ela com carinho.");
  cy.get('#terms').click();
  cy.get('#place_order').click();
  cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.');
  expect('.woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received', ("content", 'Obrigado. Seu pedido foi recebido.')).to.exist;
});