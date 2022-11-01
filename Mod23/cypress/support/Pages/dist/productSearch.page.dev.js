"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productSearchPage = void 0;
/// <reference types="cypress" />
var productSearchPage = {
  get autocompleteInput() {
    return cy.get('#tbay-header .tbay-search');
  },

  get productList() {
    return cy.get(".ui-menu-item:not([class^=\"list-header\"]) > a");
  },

  search: function search(product) {
    this.autocompleteInput.type(product);
  }
};
exports.productSearchPage = productSearchPage;