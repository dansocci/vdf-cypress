const { defineConfig } = require('cypress')
const dayjs = require('dayjs')

const timestamp = dayjs().format('YYYYMMDD_HHmmss')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: `cypress/reports/itr_ws_${timestamp}`,
    charts: true,
    reportPageTitle: 'ITR WS',
    embeddedScreenshots: true,
    inlineAssets: false,
    saveAllAttempts: false
  },
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  fixturesFolder: './cypress/fixtures',
  video: false,
})
