/// <reference types="cypress" />

class PedidosPage {

    get mensagem(){
        return cy.get(".woocommerce-notice")
    }
}

module.exports = new PedidosPage()
