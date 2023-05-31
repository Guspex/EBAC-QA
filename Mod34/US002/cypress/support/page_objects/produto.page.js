/// <reference types="cypress" />

class produtoPage {

    inserirProduto(produto, tamanho, cor, quantidade){
        cy.get('[class="product-block grid"]').contains(produto).click()
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.input-text').clear().type(quantidade)        
        cy.get('.single_add_to_cart_button').click()
    }

    clicarBotaoCarrinho(){
        cy.get('.woocommerce-message > .button').click()
    }
}

module.exports = new produtoPage()