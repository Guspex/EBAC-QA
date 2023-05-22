"use strict";

/// <reference types="cypress" />
var data = require("../fixtures/data.json");

var _require = require('../support/pages'),
    dashboardPage = _require.dashboardPage;

describe('Access Login Panel', function () {
  context('Given i visit the ebac webstore Login page', function () {
    before(function () {
      cy.visit('/my-account/');
    });
    context("When i enter a new user and new password", function () {
      beforeEach(function () {
        cy.login(data.newUser, data.newPass);
      });
      it('Then the admin dashboard page should be visible', function () {
        dashboardPage.siteName.should("be.visible");
      });
    });
  });
});