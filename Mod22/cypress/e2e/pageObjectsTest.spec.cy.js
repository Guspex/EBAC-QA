/// <reference types="cypress" />
const data = require("../fixtures/data.json")
const {dashboardPage} = require('../support/pages')

describe('Access Login Panel', () => {
  
  context('Given i visit the ebac webstore Login page', () => {
    before(() => {
      cy.visit('/my-account/')
    })
    
    context(`When i enter a new user and new password`, () => {
      beforeEach(() => {
        cy.login(data.newUser, data.newPass)
      })

      it('Then the admin dashboard page should be visible', () => {
        dashboardPage.siteName.should("be.visible")
      })
    })

  })

})
