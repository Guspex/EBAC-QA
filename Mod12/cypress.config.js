const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cdkv8i',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true
  },
  video: false,
  e2e: {
    "baseUrl": "http://lojaebac.ebaconline.art.br"
 
  },
});
