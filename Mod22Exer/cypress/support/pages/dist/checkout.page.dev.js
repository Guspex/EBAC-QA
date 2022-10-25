"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkoutPage = void 0;
/// <reference types="cypress" />
var checkoutPage = {
  get siteName() {
    return cy.get('#main-content > .page-title(content, "Checkout")');
  }

};
exports.checkoutPage = checkoutPage;