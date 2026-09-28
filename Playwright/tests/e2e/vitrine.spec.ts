import { expect, test } from '../../support/fixtures';
import { usuarios } from '../../support/users';

test.describe('Vitrine de produtos', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.abrir();
    await loginPage.entrar(usuarios.padrao);
  });

  test('ordena por preço do menor para o maior', { tag: '@regression' }, async ({ inventoryPage }) => {
    await inventoryPage.ordenarPor('lohi');

    const precos = await inventoryPage.valoresDosPrecos();
    expect(precos).toEqual([...precos].sort((a, b) => a - b));
  });

  test('ordena por preço do maior para o menor', { tag: '@regression' }, async ({ inventoryPage }) => {
    await inventoryPage.ordenarPor('hilo');

    const precos = await inventoryPage.valoresDosPrecos();
    expect(precos).toEqual([...precos].sort((a, b) => b - a));
  });

  test('ordena por nome de Z a A', { tag: '@regression' }, async ({ inventoryPage }) => {
    await inventoryPage.ordenarPor('za');

    const nomes = await inventoryPage.nomes.allTextContents();
    expect(nomes).toEqual([...nomes].sort((a, b) => b.localeCompare(a)));
  });

  test('contador do carrinho acompanha inclusões e remoções', { tag: '@smoke' }, async ({ inventoryPage }) => {
    await inventoryPage.adicionarAoCarrinho('Sauce Labs Backpack');
    await inventoryPage.adicionarAoCarrinho('Sauce Labs Bike Light');
    await expect(inventoryPage.badgeCarrinho).toHaveText('2');

    await inventoryPage.removerDoCarrinho('Sauce Labs Backpack');
    await expect(inventoryPage.badgeCarrinho).toHaveText('1');

    await inventoryPage.removerDoCarrinho('Sauce Labs Bike Light');
    await expect(inventoryPage.badgeCarrinho).toBeHidden();
  });
});
