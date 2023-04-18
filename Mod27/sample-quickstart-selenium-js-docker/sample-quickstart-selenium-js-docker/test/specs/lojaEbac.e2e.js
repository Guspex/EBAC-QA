const homePage = require("../pageobjects/home.page")
describe('Loja EBAC', () => {
    it('should access home page', async () => {
        await homePage.open()
        expect(await homePage.title).toBe("EBAC – Shop – Página de teste")
    });
});


