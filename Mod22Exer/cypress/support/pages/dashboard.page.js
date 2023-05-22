/// <reference types="cypress" />
export const dashboardPage = {
    get siteName() { return cy.get('.woocommerce-MyAccount-content > :nth-child(2)')}
}