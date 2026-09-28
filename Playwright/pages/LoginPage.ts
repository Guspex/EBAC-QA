import { Locator, Page, expect } from '@playwright/test';
import { SENHA_PADRAO } from '../support/users';

export class LoginPage {
  readonly usuario: Locator;
  readonly senha: Locator;
  readonly botaoLogin: Locator;
  readonly mensagemErro: Locator;

  constructor(private readonly page: Page) {
    this.usuario = page.getByTestId('username');
    this.senha = page.getByTestId('password');
    this.botaoLogin = page.getByTestId('login-button');
    this.mensagemErro = page.getByTestId('error');
  }

  async abrir() {
    await this.page.goto('/');
    await expect(this.botaoLogin).toBeVisible();
  }

  async entrar(usuario: string, senha: string = SENHA_PADRAO) {
    await this.usuario.fill(usuario);
    await this.senha.fill(senha);
    await this.botaoLogin.click();
  }
}
