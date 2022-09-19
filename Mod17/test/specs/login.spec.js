const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");

let password = 'GD*peToHNJ1#c$sgk08EaYJQ'
let user = 'gerente'
let url = 'http://lojaebac.ebaconline.art.br'

describe('Access admin panel', () => {
    it('Should be a login', async () => {
        await homeScreen.goToNextPage()
        await loginScreen.goToLoginPage()
        await loginScreen.setStoreAdress(url)
        await loginScreen.clickContinue()
        await loginScreen.clickContinueCredential()
        await loginScreen.setLogin(user, password)
        await loginScreen.clickPass()
        await loginScreen.confirmPass(password)
        expect(await myStoreScreen.getStoreName()).to.equal('EBAC - Shop');
    });
});