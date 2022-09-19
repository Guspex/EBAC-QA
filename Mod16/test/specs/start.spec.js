describe('Primeiro Teste', () => {
    it('Iniciar o menu forms', async () => {
        await $('~Forms').click()
        expect(await $('~text-input')).toBeDisplayed()
    });
    it('Writing Forms', async () => {
        await $('~text-input').setValue('EBAC Teste')
        await $('~Dropdown').click()
        const selector = 'new UiSelector().text("This app is awesome").className("android.widget.CheckedTextView")'
        const button = await $(`android=${selector}`)
        await button.click()
        await $('~button-Active').click()
    });
    it('should be displayed', async () => {
        const isDisplayed = await $("~parentPanel").isDisplayed()
        expect(isDisplayed);
    });
});