/// <reference types="cypress" />

class CarrinhoPage {

    get produto(){
        return cy.get('.product-name > a')
    }

    addProduto(){
        cy.get('.plus').click()
    }

    get Total(){
        return cy.get('.product-subtotal > .woocommerce-Price-amount > bdi')
    }

    removeProduto(){
        cy.get('.remove > .fa').click()
    }

    get carrinhoVazio(){
        return cy.get('.cart-empty')
    }
    
}

module.exports = new CarrinhoPage()
