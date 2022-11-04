"use strict";

var _require = require("cypress"),
    defineConfig = _require.defineConfig;

var dotenvPlugin = require('cypress-dotenv');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents: function setupNodeEvents(on, config) {
      config = dotenvPlugin(config);
      return config;
    },
    env: {
      "baseUrl": "http://localhost"
    }
  }
});