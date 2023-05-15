const productsViewScreen = require('../screens/productView.screen')

describe('Product Search', () => {

    it('should search by product', async () => {
        let searchName = 'Camisa'
        await productsViewScreen.waitProduct(searchName)
        await productsViewScreen.search()
        await productsViewScreen.searchBy(`${searchName}\n`)

        expect(await productsViewScreen.product(searchName)).toExist()
    })
    
})
