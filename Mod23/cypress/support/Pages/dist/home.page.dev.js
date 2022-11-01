"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homePage = void 0;
/// <reference types="cypress" />
var homePage = {
  get magnifier() {
    return cy.get('.site-header .search-form > button');
  },

  searchMagnifier: function searchMagnifier() {
    this.magnifier.click();
  }
};
exports.homePage = homePage;