const { defineConfig } = require("cypress");
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = defineConfig({
  projectId: 'c6rf5a',
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    endpoint: 'https://demo.reportportal.io/api/v1',
    token: '323353a2-b1e9-44d6-afcf-5a096c34eb64',
    launch: 'guspex_TEST_EXAMPLE',
    project: 'guspex_personal',
    description: 'Teste para Mod31 EBAC',
    attributes: [
      {
        key: 'attributeKey',
        value: 'attrbiuteValue',
      },
      {
        value: 'anotherAttrbiuteValue',
      },
    ],
  },
  e2e: {
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    specPattern: "**/*.feature"
  },
});
