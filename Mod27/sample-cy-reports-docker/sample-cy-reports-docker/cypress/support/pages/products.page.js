/// <reference types="cypress" />
export const productsPage = {
    get productList() { return cy.get('figure .product-image') }
}