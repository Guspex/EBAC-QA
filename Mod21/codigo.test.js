const {soma, dobro} = require('./codigo');

describe('funcoes', () => {
    it('soma de dois valores', () => {
        expect(soma(1,5)).toBe(6);
        expect(soma(2,5)).toBe(7);
        expect(soma(3,5)).toBe(8);
    });
    it('Dobro de um valor', () => {
        expect(dobro(4)).toBe(8);
    });


});
