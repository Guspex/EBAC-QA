class MyStoreScreen {
    get #myStoreName(){
        return $('id:toolbar_subtitle')
    }

    async getStoreName(){
        return await this.#myStoreName.getText()
    }
}
module.exports = new MyStoreScreen()