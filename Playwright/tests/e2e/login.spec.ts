import { expect, test } from '../../support/fixtures';
import { usuarios } from '../../support/users';

test.describe('Login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.abrir();
  });

  test('usuário válido acessa a vitrine de produtos', { tag: '@smoke' }, async ({ page, loginPage, inventoryPage }) => {
    await loginPage.entrar(usuarios.padrao);

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(inventoryPage.titulo).toHaveText('Products');
    await expect(inventoryPage.itens).toHaveCount(6);
  });

  test('usuário bloqueado não consegue entrar', { tag: '@regression' }, async ({ loginPage }) => {
    await loginPage.entrar(usuarios.bloqueado);

    await expect(loginPage.mensagemErro).toContainText('Sorry, this user has been locked out.');
  });

  test('senha inválida exibe mensagem de erro', { tag: '@regression' }, async ({ loginPage }) => {
    await loginPage.entrar(usuarios.padrao, 'senha_errada');

    await expect(loginPage.mensagemErro).toContainText(
      'Username and password do not match any user in this service',
    );
  });

  test('usuário obrigatório', { tag: '@regression' }, async ({ loginPage }) => {
    await loginPage.botaoLogin.click();

    await expect(loginPage.mensagemErro).toContainText('Username is required');
  });

  test('senha obrigatória', { tag: '@regression' }, async ({ loginPage }) => {
    await loginPage.usuario.fill(usuarios.padrao);
    await loginPage.botaoLogin.click();

    await expect(loginPage.mensagemErro).toContainText('Password is required');
  });

  test('página interna não abre sem autenticação', { tag: '@regression' }, async ({ page, loginPage }) => {
    await page.goto('/inventory.html');

    await expect(loginPage.mensagemErro).toContainText(
      "You can only access '/inventory.html' when you are logged in.",
    );
  });
});
