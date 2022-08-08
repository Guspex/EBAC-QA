/// <reference types="cypress" />

describe('Página de produtos', () => {
    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/12/')
    });
    it('Seleciona Produto', () => {
        cy.get('[class="product-block grid"]').first().click()
    });
    it('Deve adicionar ao carrinho', () => {
        let qtde = 5
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Orange').click()
        cy.get('.input-text').clear().type(qtde)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qtde)
        cy.get('.woocommerce-message > .button').click()
    });
});