class guestHomeScreen {
  get #enterStoreAdress() {
    return $("id:button_login_store")
  }

  async goToLogin() {
    await this.#enterStoreAdress.waitForExist({ timeout: 10000 })
    await this.#enterStoreAdress.click()
  }
}

module.exports = new guestHomeScreen();
