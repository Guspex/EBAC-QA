require('dotenv').config()

const { generalConf } = require('./general.conf')
const { hooksConf } = require('./hooks.conf')
const { reporterConf } = require('./report.conf')
const { specsConf } = require('./specs.conf')

let capabilities = process.env.PLATFORM === 'android' ? {
    capabilities: [{
        app: `${process.env.ANDROID_APP_ID}`,
        device : 'Samsung Galaxy Note 20',
        os_version : '10.0',
        project: 'Meu primeiro projeto em Device Farm',
        build: 'Ebac CI Mobile',
        name: 'teste_login'
    }]
} : {
    capabilities: [{
        app: `${process.env.IOS_APP_ID}`,
        device: "iPhone 13 Pro Simulator",
        project: 'Meu primeiro projeto Appium IOS BS',
        name: "ebac_teste",
        build: 'Ebac Teste IOS',
        os_version: '14',
        'browserstack.debug': true
    }]
}

let bsConf = {
    ...generalConf,
    ...capabilities,
    user: process.env.BS_USER,
    key: process.env.BS_KEY,
    services: ["browserstack"]
}
module.exports = {bsConf}