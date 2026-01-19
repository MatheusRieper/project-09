const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{
    ADMIN_USER: "standard_user",
    ADMIN_PASS: "secret_sauce",
    ADMIN_FIRSTNAME: "test",
    ADMIN_LASTNAME: "testing",
    ADMIN_CODE: "0800122"
  }
});