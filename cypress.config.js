const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '14w8m3',
  browser: 'chrome',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
