/// <reference types="cypress" />
const data = require("../fixtures/data.json")
const {dashboardPage} = require('../support/pages')

describe('Access Admin Panel', () => {
  
  context('Given i visit the ebac webstore', () => {
    before(() => {
      cy.visit('/')
    })
    
    context(`When i log in with user ${data.usuario} and password ${data.senha} `, () => {
      beforeEach(() => {
        cy.login(data.senha, data.usuario)
      })

      it('Then the admin dashboard page should be visible', () => {
        dashboardPage.siteName.should("be.visible")
      })
    })

  })

})
