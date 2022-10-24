"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require("cypress"),
    defineConfig = _require.defineConfig;

module.exports = defineConfig({
  e2e: _defineProperty({
    setupNodeEvents: function setupNodeEvents(on, config) {},
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    specPattern: "**/*.feature"
  }, "specPattern", "**/**.cy.js")
});