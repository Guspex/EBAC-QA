class HomeScreen {
    get #enterStoreLogin(){
        return $('id:button_skip')
    }

    async goToNextPage(){
        await this.#enterStoreLogin.click()
    }
}
module.exports = new HomeScreen()