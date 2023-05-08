const { localConf } = require('./local.conf');
const { sauceConf } = require('./sauce.conf');
const { bsConf } = require('./bs.conf');

require('dotenv').config()

function getConfig(){
    switch (process.env.ENVIRONMENT) {
        case 'local': default:
            return localConf
        case 'saucelabs':
            return sauceConf
        case 'browserstack':
            return bsConf

    }
}

exports.config = getConfig()