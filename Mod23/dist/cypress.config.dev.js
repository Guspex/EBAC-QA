"use strict";

var _require = require("cypress"),
    defineConfig = _require.defineConfig;

var dotenvPlugin = require('cypress-dotenv');

var registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = defineConfig({
  projectId: 'cdkv8i',
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    endpoint: 'https://demo.reportportal.io/api/v1',
    token: '323353a2-b1e9-44d6-afcf-5a096c34eb64',
    launch: 'guspex_TEST_EXAMPLE',
    project: 'guspex_personal',
    description: 'Teste para Mod23 EBAC',
    attributes: [{
      key: 'attributeKey',
      value: 'attrbiuteValue'
    }, {
      value: 'anotherAttrbiuteValue'
    }]
  },
  e2e: {
    setupNodeEvents: function setupNodeEvents(on, config) {
      config = dotenvPlugin(config);
      return config, registerReportPortalPlugin(on, config);
    },
    env: {
      "baseUrl": "http://localhost"
    }
  }
});