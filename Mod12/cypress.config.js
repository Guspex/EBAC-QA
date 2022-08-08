const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cdkv8i',
  e2e: {
    "baseUrl": "http://lojaebac.ebaconline.art.br"
 
  },
});
