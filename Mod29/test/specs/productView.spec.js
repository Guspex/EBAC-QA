const productsViewScreen = require('../screens/productView.screen')

describe('Product List', () => {

    it('should list products', async () => {
        expect(await productsViewScreen.product('Camisa 1')).toExist()
        expect(await productsViewScreen.productList()).toBeElementsArrayOfSize(10)
    })

    

})
