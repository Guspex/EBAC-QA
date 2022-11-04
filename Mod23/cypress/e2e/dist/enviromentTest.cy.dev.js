"use strict";

/// <reference types="cypress" />
describe('Enviroment Variables', function () {
  beforeEach(function () {
    cy.visit(Cypress.env('baseUrl'));
  });
  it('Cypress.json', function () {
    cy.url().should('contain', Cypress.env('baseUrl'));
  });
});