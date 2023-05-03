const { localConf } = require('./local.conf');

require('dotenv').config()

function getConfig(){
    switch (process.env.ENVIRONMENT) {
        case 'local': default:
            return localConf
        case 'saucelabs':
            return sauceConf
        case 'browserstack':
            return browseConf

    }
}

exports.config = getConfig()