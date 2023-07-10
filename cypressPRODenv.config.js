const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://www.cypress.io/",
    //todoPage: "todo",
    //actionsPage: "commands/actions",
    //locationPage: "commands/location",
    envTag: "cypressPROD",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', verifyDownloadTasks);
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    viewportWidth: 1280,
    viewportHeight: 720
  },
});
