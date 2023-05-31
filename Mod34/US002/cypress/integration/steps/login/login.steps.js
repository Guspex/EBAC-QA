/// <reference types="cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
const { faker } = require('@faker-js/faker')
const { loginPage, homePage } = require('../../../support/page_objects')
const login = require('../../../fixtures/perfil.json')

Given('I access the my account page', () =>{
    cy.visit('/minha-conta')
})

When('I input active user {string} and pass {string}', () =>{
   cy.login(login.user, login.pass)
    
})

When('I input invalid user {string} and pass {string}', () =>{
    cy.login(login.invalid, login.pass)     
 })

 When('I input active user {string} and wrong pass {string}', () =>{
    cy.login(login.user, login.wrong)     
 }) 

Then('I should see a message of success on login', () => {
    homePage.validateAccess()
})

Then('I should see a validation message', () => {
    loginPage.validateInvalidUser()
})

Then('I should see a warning message', () => {
    loginPage.validateWrongPassword()
})