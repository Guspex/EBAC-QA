class RegistroScreen {
    get #enterProducts(){
        return $('//android.widget.FrameLayout[@content-desc="Products"]/android.widget.FrameLayout/android.widget.ImageView')
    }
    async goToProducts(){
        await this.#enterProducts.click()
    }

    get #addProduct(){
        return $('//android.widget.ImageButton[@content-desc="Add products"]')
    }
    async addProd(){
        await this.#addProduct.click()
    }

    get #productField(){
        return $('android= new UiSelector().text("Simple physical product")')
    }
    async addPhysical(){
        await this.#productField.click()
    }

    get #nameProduct(){
        return $('android= new UiSelector().text("Enter Product Title")')
    }
    async addName(name){
        await this.#nameProduct.setValue(name)
    }

    get #addPrice(){
        return $('android= new UiSelector().text("Add price")')
    }
    get #regPrice(){
        return $('android= new UiSelector().text("Regular price")')
    }
    get #salePrice(){
        return $('android= new UiSelector().text("Sale price")')
    }
    get #navigate(){
        return $('//android.widget.ImageButton[@content-desc="Navigate up"]')
    }
    async addPrice(preco, promopreco){
        await this.#addPrice.click()
        await this.#regPrice.setValue(preco)
        await this.#salePrice.setValue(promopreco)
        await this.#navigate.click()
    }

    get #inventory(){
        return $('android= new UiSelector().text("Inventory")')
    }
    get #stockUnity(){
        return $('android= new UiSelector().text("Limit one per order")')
    }
    async addInventory(){
        await this.#inventory.click()
        await this.#stockUnity.click()
        await this.#navigate.click()
    }

    get #publish(){
        return $('android= new UiSelector().text("PUBLISH")')
    }
    async pubProduct(){
        await this.#publish.click()
        await this.#navigate.click()
    }
}
module.exports = new RegistroScreen()