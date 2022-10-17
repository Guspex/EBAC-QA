"use strict";

/// <reference types="cypress" />
var data = require("../fixtures/data.json");

var _require = require('../support/pages'),
    dashboardPage = _require.dashboardPage;

describe('Access Admin Panel', function () {
  context('Given i visit the ebac webstore', function () {
    before(function () {
      cy.visit('/');
    });
    context("When i log in with user ".concat(data.usuario, " and password ").concat(data.senha, " "), function () {
      beforeEach(function () {
        cy.login(data.senha, data.usuario);
      });
      it('Then the admin dashboard page should be visible', function () {
        dashboardPage.siteName.should("be.visible");
      });
    });
  });
});