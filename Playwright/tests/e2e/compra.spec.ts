import { CheckoutPage } from '../../pages/CheckoutPage';
import { expect, test } from '../../support/fixtures';
import { cliente, usuarios } from '../../support/users';

const produtos = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];

test.describe('Fluxo de compra', () => {
  test.beforeEach(async ({ loginPage, inventoryPage }) => {
    await loginPage.abrir();
    await loginPage.entrar(usuarios.padrao);
    for (const produto of produtos) {
      await inventoryPage.adicionarAoCarrinho(produto);
    }
    await inventoryPage.abrirCarrinho();
  });

  test('finaliza a compra com valores consistentes', { tag: '@smoke' }, async ({ cartPage, checkoutPage }) => {
    await expect(cartPage.itens).toHaveCount(produtos.length);
    await cartPage.irParaCheckout();
    await checkoutPage.preencherDados(cliente.nome, cliente.sobrenome, cliente.cep);

    // Regra de negócio: subtotal = soma dos itens e total = subtotal + imposto
    const precos = (await checkoutPage.precosItens.allTextContents()).map(CheckoutPage.valor);
    const subtotal = CheckoutPage.valor(await checkoutPage.subtotal.textContent());
    const imposto = CheckoutPage.valor(await checkoutPage.imposto.textContent());
    const total = CheckoutPage.valor(await checkoutPage.total.textContent());

    expect(subtotal).toBeCloseTo(precos.reduce((soma, p) => soma + p, 0), 2);
    expect(total).toBeCloseTo(subtotal + imposto, 2);

    await checkoutPage.botaoFinalizar.click();
    await expect(checkoutPage.mensagemConclusao).toHaveText('Thank you for your order!');
  });

  test('CEP é obrigatório no checkout', { tag: '@regression' }, async ({ cartPage, checkoutPage }) => {
    await cartPage.irParaCheckout();
    await checkoutPage.preencherDados(cliente.nome, cliente.sobrenome, '');

    await expect(checkoutPage.mensagemErro).toContainText('Postal Code is required');
  });
});
