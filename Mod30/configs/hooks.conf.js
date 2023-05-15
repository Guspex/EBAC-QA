let hooksConf = {
    afterStep: function (test, scenario, { error, duration, passed }) {
        if(error) {
            driver.takeScreenshot()
        }
    },
    beforeSuite: async function(){
        //app ja esta instalado e executando
        let state = await driver.queryAppState("br.art.ebaconline")
        if(state !== 4){
            await driver.launchApp()
        }
    },
    afterSuite: async function(){
        //fechar o app
        await driver.closeApp()
    }
}
    

module.exports = {hooksConf}