"use strict";

var _require = require("cypress"),
    defineConfig = _require.defineConfig;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents: function setupNodeEvents(on, config) {// implement node event listeners here
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    specPattern: "**/*.feature"
  }
});