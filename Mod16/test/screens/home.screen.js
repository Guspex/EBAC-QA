class HomeScreen {
    get #enterStoreLogin(){
        return $('id:button_next')
    }

    async goToNextPage(){
        this.#enterStoreLogin.click()
    }
}
module.exports = new HomeScreen()