const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: 'index.html',
    overwrite: false,
    html: true,
    json: true
  },
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: 'http://localhost:3000/',
    specPattern: "**/*.feature",
    specPattern: "**/**.cy.js"
  },  
});
