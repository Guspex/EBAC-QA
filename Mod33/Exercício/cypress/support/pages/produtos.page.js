/// <reference types="cypress" />

class produtosPage {
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

    clicarPreviewCarrinho(){
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    }

    get PreviewCarrinho(){
        return cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .cart_list')
    }


}

module.exports =  new produtosPage()
