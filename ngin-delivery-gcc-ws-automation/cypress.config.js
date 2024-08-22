const { defineConfig } = require('cypress')
const dayjs = require('dayjs')
const env = process.env.ENVIRONMENT || 'all'

const timestamp = dayjs().format('YYYYMMDD_HHmmss')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: `cypress/reports/gcc_ws_${env.trim()}_${timestamp}`,
    charts: true,
    reportPageTitle: `GCC WS ${env.toUpperCase()}`,
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
  fixturesFolder: false,
  video: false,
})
