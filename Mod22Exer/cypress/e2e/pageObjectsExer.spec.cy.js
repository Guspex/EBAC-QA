/// <reference types="cypress" />
const data = require("../fixtures/data.json")
const {registerPage, dashboardPage} = require("../support/pages")

describe('When i acess the login page', () => {
  beforeEach(() => {
    cy.visit('/my-account/')
  })
  it('Should register a new user', () => {
    registerPage.register(data.email, data.password)
    expect(dashboardPage).to.exist;
  });
});
