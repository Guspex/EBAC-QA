"use strict";

var _cypressCucumberPreprocessor = require("@badeball/cypress-cucumber-preprocessor");

/// <reference types="cypress" />
var _require = require('../../support/pages'),
    dashboardPage = _require.dashboardPage;

(0, _cypressCucumberPreprocessor.Given)(' i visit the ebac webstore ', function () {
  cy.visit('/');
});
(0, _cypressCucumberPreprocessor.When)("i log in with user {string} and password {string}", function (user, password) {
  cy.login(user, password);
});
(0, _cypressCucumberPreprocessor.Then)(' the admin dashboard page should be visible', function () {
  dashboardPage.siteName.should("be.visible");
});