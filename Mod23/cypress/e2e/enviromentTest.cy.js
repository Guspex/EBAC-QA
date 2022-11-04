/// <reference types="cypress" />

describe('Enviroment Variables', () => {
    
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
    });

    it('Cypress.json', () => {
        cy.url().should('contain', Cypress.env('baseUrl'))
    });
});