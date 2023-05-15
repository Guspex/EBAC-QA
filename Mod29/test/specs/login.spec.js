const guestHomeScreen = require("../screens/guestHome.screen")
const loginScreen = require("../screens/login.screen")
const myStoreScreen = require("../screens/myStore.screen")

let url = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let password = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Acessar Admin Panel', () => {
    
    it('Deve realizar o login com sucesso', async () => {
        
        await guestHomeScreen.goToLogin()
        await loginScreen.setStoreAdress(url)
        await loginScreen.clickContinueButton()
        await loginScreen.clickContinueStoreCredentialsButton()
        await loginScreen.setLogin(usuario, password)
        await loginScreen.clickTwoFactorButton() 
        await loginScreen.twoFactorLogin(password)

        expect(await myStoreScreen.getStoreLogo()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')       
    });
});
