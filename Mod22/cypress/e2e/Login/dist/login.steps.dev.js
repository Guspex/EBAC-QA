"use strict";

var _steps = require("cypress-cucumber-preprocessor/steps");

/// <reference types="cypress" />
var _require = require('../../support/pages'),
    dashboardPage = _require.dashboardPage;

(0, _steps.Given)(' i visit the ebac webstore ', function () {
  cy.visit('/');
});
(0, _steps.When)("i log in with user {string} and password {string}", function (user, password) {
  cy.login(data.senha, data.usuario);
});
(0, _steps.Then)(' the admin dashboard page should be visible', function () {
  dashboardPage.siteName.should("be.visible");
});