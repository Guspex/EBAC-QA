/// <reference types="cypress" />
//require('dotenv').config()
const dotenvPlugin = require('cypress-dotenv')
module.exports = (on, config) => {
    //config.env.HOST = process.env.HOST
    config = dotenvPlugin(config)
    return config
}