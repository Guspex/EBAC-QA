import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import {
    mount
} from 'cypress/vue2'

Cypress.Commands.add('mount', mount)