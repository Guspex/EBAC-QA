/// <reference types="cypress" />
export const checkoutPage = {
    get siteName() { return cy.get('#main-content > .page-title(content, "Checkout")')}
}