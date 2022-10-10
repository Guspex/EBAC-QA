const {
    startDevServer
} = require('@cypress/webpack-dev-server')
const webpackConfig = require('@vue/cli-service/webpack.config.js')
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import {
    mount
} from 'cypress/vue2'

Cypress.Commands.add('mount', mount)

module.exports = (on, config) => {
    on('dev-server:start', options => {
        return startDevServer({
            options,
            webpackConfig
        })
    })
    return config
}