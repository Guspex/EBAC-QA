/// <reference types="cypress" />
export const homePage = {
    get magnifier() { return cy.get('.site-header .search-form > button') },
    searchMagnifier() { this.magnifier.click() }
}