require ('dotenv').config()

let specsConf = process.env.PLATFORM === 'android' ? {
    specs: [
        './testes/specs/login.spec.js'
    ]
} : {
    specs: [
        './testes/specs/productFlow.spec.js',
        './testes/specs/productSearch.spec.js'
    ]
}
    

module.exports = {specsConf}