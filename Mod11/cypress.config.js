const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fsa2jm',
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: 'http://localhost:60546'
    },
  },
});
