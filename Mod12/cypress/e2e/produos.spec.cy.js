/// <reference types="cypress" />

describe('Página de produtos', () => {
    beforeEach(() => {
        cy.visit('produtos/page/7')
    });
    it('Seleciona Produto', () => {
        cy.get('[class="product-block grid"]').first().click()
    });
    it('Deve adicionar ao carrinho', () => {
        let qtde = 3
        cy.get('[class="product-block grid"]').first().click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type(qtde)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qtde)
        cy.get('.woocommerce-message > .button').click()
    });
    it('Deve adicionar produtos com comandos', () => {
        cy.addProdutos('XL', 'Black', 3)
    });
});