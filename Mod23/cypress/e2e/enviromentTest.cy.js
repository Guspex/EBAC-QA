/// <reference types="cypress" />

describe('Enviroment Variables', () => {
    
    beforeEach(() => {
        cy.visit(Cypress.env('HOST'))
    });

    it('Cypress.json', () => {
        cy.url().should('contain', Cypress.env('HOST'))
    });
});