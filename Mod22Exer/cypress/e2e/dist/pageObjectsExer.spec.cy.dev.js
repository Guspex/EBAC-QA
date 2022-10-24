"use strict";

/// <reference types="cypress" />
var data = require("../fixtures/data.json");

var _require = require("../support/pages"),
    registerPage = _require.registerPage,
    dashboardPage = _require.dashboardPage;

describe('When i acess the login page', function () {
  beforeEach(function () {
    cy.visit('/my-account/');
  });
  it('Should register a new user', function () {
    registerPage.register(data.email, data.password);
    expect(dashboardPage).to.exist;
  });
});