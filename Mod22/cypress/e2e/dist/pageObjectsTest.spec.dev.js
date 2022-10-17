"use strict";

/// <reference types="cypress" />
var data = require("../fixtures/data.json");

var _require = require('../support/pages'),
    dashboardPage = _require.dashboardPage,
    loginPage = _require.loginPage;

describe('Access Admin Panel', function () {
  beforeEach(function () {
    cy.visit('/wp-admin');
  });
  it('should login with valid credentials', function () {
    loginPage.login(data.usuario, data.senha);
    dashboardPage.siteName.should("be.visible");
  });
});