"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboardPage = void 0;
/// <reference types="cypress" />
var dashboardPage = {
  get siteName() {
    return cy.get('.woocommerce-MyAccount-content > :nth-child(2)');
  }

};
exports.dashboardPage = dashboardPage;