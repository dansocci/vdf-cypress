import 'cypress-plugin-api'
import 'cypress-mochawesome-reporter/register'
import './api_commands_pt'
import './api_error_responses_pt'
import './api_commands_uk'
import './api_error_responses_uk'

const dayjs = require('dayjs')
Cypress.dayjs = dayjs