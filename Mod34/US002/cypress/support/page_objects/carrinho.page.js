/// <reference types="cypress" />


class CartPage {

    validateProduct() {
        cy.get('.product-name > a').should('contain', 'Ajax Full-Zip Sweatshirt - M, Green')   

    }

    


}

module.exports = new CartPage()