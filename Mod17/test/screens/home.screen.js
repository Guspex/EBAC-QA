class HomeScreen {
    get #enterStoreLogin(){
        return $('id:button_skip')
    }

    get #skipSurvey() {
        return $('id:survey_button_skip')
    }

    async goToNextPage(){
        await this.#enterStoreLogin.click()
        if (await this.#skipSurvey.isExisting()){
            await this.#skipSurvey.click()
        }
    }
}
module.exports = new HomeScreen()