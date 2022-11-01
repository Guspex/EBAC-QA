"use strict";

var _pages = require("../support/pages");

/// <reference types="cypress" />
var data = require('../fixtures/data.json');

describe('Product Search', function () {
  before(function () {
    cy.intercept({
      method: 'GET',
      url: '/wp-admin/admin-ajax*',
      query: {
        term: 'Jacket'
      }
    }, function (req) {
      req.reply({
        statusCode: 200,
        body: "".concat(req.query.callback, "( \n                    ").concat(JSON.stringfy(data.autocompleteSearchData), "\n                )")
      });
    });
  });
  beforeEach(function () {
    cy.visit("/");
  });
  it('Search should be return a product searched', function () {
    _pages.homePage.searchMagnifier();

    _pages.productSearchPage.search('jacket');

    _pages.productSearchPage.productList.first().should('have.attr', 'title', 'Ingrid Running Jacket');
  });
});