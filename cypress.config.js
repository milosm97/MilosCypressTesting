const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  projectId: 'dnznzv',
  waitForFileChange: true,
  defaultCommandTimeout: 5000,
  baseUrl: "https://github.com/milosm97/MilosCypressTesting.git",
  integrationFolder: "cypress/e2e",
  supportFile: "cypress/support/index.js",
  viewportWidth: 1000,
  viewportHeight: 660,
  video: false,
  retries: {
    runMode: 2,
    openMode: 1
           },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
