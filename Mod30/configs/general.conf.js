const { hooksConf } = require("./hooks.conf")
const { reporterConf } = require("./report.conf")
const { specsConf } = require("./specs.conf")

let generalConf = {
    path: '/wd/hub',
    framework: 'mocha',
    waitforTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },
    maxInstances: 1,
    ...hooksConf,
    ...reporterConf,
    ...specsConf
}
module.exports = {generalConf}