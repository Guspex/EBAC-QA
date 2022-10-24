/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
const {dashboardPage} = require('../../support/pages')

Given(' i visit the ebac webstore ', () => {
    cy.visit('/')
})
When("i log in with user {string} and password {string}" , (user, password) => {
    cy.login(user, password)
})
Then(' the admin dashboard page should be visible', () => {
    dashboardPage.siteName.should("be.visible")
})