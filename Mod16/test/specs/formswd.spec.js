const homewdScreen = require("../screens/homewd.screen");

describe('Entrar no Formulário', () => {
    it('Iniciar o menu forms', async () => {
        await homewdScreen.goToNextPage()
       expect(await $('~text-input')).toBeDisplayed()
    });
});