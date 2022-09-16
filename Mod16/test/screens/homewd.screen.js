class FormsScreen {
    get #enterForms(){
        return $('~forms')
    }

    async goToNextPage(){
        this.#enterForms.click()
    }
}
module.exports = new FormsScreen()