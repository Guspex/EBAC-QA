class ProductViewScreen {

    get #products(){
        return $$(`-ios predicate string: name CONTAINS 'R$'`)
    }

    get #searchIcon(){
        return $(`-ios class chain:**/XCUIElementTypeButton[2]`)
    }

    get #searchText(){
        return $(`-ios predicate string:type == "XCUIElementTypeTextField"`)
    }

    get #searchBtn(){
        return $(`~Procurar`)
    }

    get #productImg(){        
        return $(`-ios class chain:**/XCUIElementTypeImage`)  
    }

    get #productIncrease(){
        return $(`-ios class chain:**/XCUIElementTypeButton[2]`)
    }

    get #addToCart(){
        return $(`~Adicionar ao carrinho`)
    }

    get #goToCart(){        
        return $(`-ios predicate string:label == "2" AND name == "2" AND type == "XCUIElementTypeButton"`)
    }

    get #totalCart(){
        return $(`~R$ 24.00`)
    }

    async search(){
        await this.#searchIcon.waitForEnabled({ timeout: 10000 })
        await this.#searchIcon.click()
    }

    async searchBy(name){
        await this.#searchText.waitForEnabled({ timeout: 10000 })
        await this.#searchText.setValue(name)
        await this.#searchBtn.click()
    }

    async productList(){
        return await this.#products
    }

    async waitProduct(name){
        await $(`-ios predicate string:name CONTAINS '${name}'`).waitForDisplayed({ timeout: 15000 })
    }

   async productSelect(){
        await this.#productImg.waitForEnabled({timeout: 15000})
        await this.#productImg.click()        
   }
   
    async product(name){
        await this.waitProduct(name)
        return await $(`-ios predicate string:name CONTAINS '${name}'`)
    }

    async productAdd(){
        await this.#productIncrease.click()
        await this.#addToCart.click()
    }

    async goToCArt(){
        await this.#goToCart.click()
    }

    async waitTotal(){
        return await this.#totalCart
    }

}

module.exports = new ProductViewScreen()
