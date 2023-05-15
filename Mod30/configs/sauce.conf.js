require('dotenv').config()

const { generalConf } = require('./general.conf')

let capabilities = process.env.PLATFORM === 'android' ? {
    capabilities: [{
        platformName: "android",
        "appium:app": "storage:filename=loja-ebac.apk",
        "appium:deviceName": "Samsung.*Galaxy.*",
        "appium:platformVersion": "10",
        "sauce:options": {
          "name": "Teste Login EBAC Android"
        }
      }]
} : {
    capabilities: [{
        platformName: "ios",
        "appium:app": "storage:filename=loja-ebac.ipa",
        "appium:deviceName": "Iphone.*",
        "appium:platformVersion": "15.1",
        "sauce:options": {
          "name": "Teste Login EBAC IOS"
        }
      }]
}

let sauceConf = {
    ...generalConf,
    ...capabilities,
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',
    services: [
        ['sauce', {
            sauceConnect: true,
        }]
    ]
}
module.exports = {sauceConf}