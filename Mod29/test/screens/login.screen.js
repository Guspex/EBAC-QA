

class loginScreen {

    get #storeAdress(){
        return $('android.widget.EditText')
    }

    get #continueButton(){
        return $('id:bottom_button')
    }

    get #continueStoreCredentialsButton()
    {
        return $('id:login_site_creds')
    }

    get #username(){
        return $('android=new UiSelector().text("Username")')
    }

    get #password(){
        return $('android=new UiSelector().text("Password")')
    }

    get #twoFactorPasswordButton(){
        return $('id:login_enter_password')
    }

    async setStoreAdress(url){
        await this.#storeAdress.waitForExist({ timeout: 10000 })
        await this.#storeAdress.setValue(url)
    } 

    async clickContinueButton(){
        await this.#continueButton.waitForExist({ timeout: 10000 })
        await this.#continueButton.click()
    }

    async clickContinueStoreCredentialsButton(){
        await this.#continueStoreCredentialsButton.waitForExist({ timeout: 10000 })
        await this.#continueStoreCredentialsButton.click()
    }

    async setLogin(username, password){
        await this.#username.waitForExist({ timeout: 10000 })
        await this.#username.setValue(username)
        await this.#password.setValue(password)
        await this.#continueButton.click()
    }

    async clickTwoFactorButton(){
        await this.#twoFactorPasswordButton.waitForExist({ timeout: 10000 })
        await this.#twoFactorPasswordButton.click()
    }

    async twoFactorLogin(password){
        await this.#password.waitForExist({ timeout: 10000 })
        await this.#password.setValue(password)
        await this.#continueButton.click()
    }




}

module.exports = new loginScreen();
