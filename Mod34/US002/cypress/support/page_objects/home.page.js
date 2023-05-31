/// <reference types="cypress" />


class HomePage {

    validateAccess() {
        cy.get('.page-title').should('contain', 'Minha conta')      

    }

    


}

module.exports = new HomePage()