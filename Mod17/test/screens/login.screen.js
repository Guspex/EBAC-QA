class LoginScreen {
    get #enterLogin(){
        return $('android= new UiSelector().text("Enter your store address")')
    }

    get #storeAdress(){
        return $('android= new UiSelector().text("Site address")')
    }

    get #continue(){
        return $('id:bottom_button')
    }

    get #continueCredintial(){
        return $('id:login_site_creds')
    }

    get #userfield(){
        return $('android= new UiSelector().text("Username")')
    }

    get #passwordfield(){
        return $('android= new UiSelector().text("Password")')
    }

    get #continuePass(){
        return $('id:login_enter_password')
    }

    async goToLoginPage(){
        await this.#enterLogin.click()
    }

    async setStoreAdress(url){
        await this.#storeAdress.setValues(url)
    }

    async clickContinue(){
        await this.#continue().click()
    }

    async clickContinueCredential(){
        await this.#continueCredintial().click()
    }

    async setLogin(email, password){
        await this.#userfield.setValues(email)
        await this.#passwordfield.setValues(password)
        await this.#continue.click()
    }

    async clickPass(){
        await this.#continuePass().click()
    }

    async confirmPass(password){
        await this.#passwordfield.setValues(password)
        await this.#continue.click()
    }
}
module.exports = new LoginScreen()