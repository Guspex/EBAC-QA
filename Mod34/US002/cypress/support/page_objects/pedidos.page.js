/// <reference types="cypress" />

class PedidosPage {

    validateOrderPlaced(){
        cy.get(".woocommerce-notice").should('contain', 'Obrigado. Seu pedido foi recebido.')
    }
}

module.exports = new PedidosPage()