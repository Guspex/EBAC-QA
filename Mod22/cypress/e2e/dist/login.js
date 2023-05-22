"use strict";
/// <reference types="cypress" />
exports.__esModule = true;
var cypress_cucumber_preprocessor_1 = require("@badeball/cypress-cucumber-preprocessor");
var dashboardPage = require('../support/pages').dashboardPage;
cypress_cucumber_preprocessor_1.Given(' i visit the ebac webstore ', function () {
    cy.visit('/');
});
cypress_cucumber_preprocessor_1.When("i log in with user {string} and password {string}", function (user, password) {
    cy.login(user, password);
});
cypress_cucumber_preprocessor_1.Then(' the admin dashboard page should be visible', function () {
    dashboardPage.siteName.should("be.visible");
});
