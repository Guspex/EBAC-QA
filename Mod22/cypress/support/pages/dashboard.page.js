/// <reference types="cypress" />
export const dashboardPage = {
    get siteName() { return cy.get('#wp-admin-bar-site-name > [aria-haspopup="true"]')}
}