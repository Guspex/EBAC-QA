import { Locator, Page } from '@playwright/test';

export class CheckoutPage {
  readonly nome: Locator;
  readonly sobrenome: Locator;
  readonly cep: Locator;
  readonly botaoContinuar: Locator;
  readonly botaoFinalizar: Locator;
  readonly mensagemErro: Locator;
  readonly subtotal: Locator;
  readonly imposto: Locator;
  readonly total: Locator;
  readonly mensagemConclusao: Locator;
  readonly precosItens: Locator;

  constructor(private readonly page: Page) {
    this.nome = page.getByTestId('firstName');
    this.sobrenome = page.getByTestId('lastName');
    this.cep = page.getByTestId('postalCode');
    this.botaoContinuar = page.getByTestId('continue');
    this.botaoFinalizar = page.getByTestId('finish');
    this.mensagemErro = page.getByTestId('error');
    this.subtotal = page.getByTestId('subtotal-label');
    this.imposto = page.getByTestId('tax-label');
    this.total = page.getByTestId('total-label');
    this.mensagemConclusao = page.getByTestId('complete-header');
    this.precosItens = page.getByTestId('inventory-item-price');
  }

  async preencherDados(nome: string, sobrenome: string, cep: string) {
    await this.nome.fill(nome);
    await this.sobrenome.fill(sobrenome);
    await this.cep.fill(cep);
    await this.botaoContinuar.click();
  }

  /** Extrai o valor numérico de rótulos como "Item total: $39.98". */
  static valor(texto: string | null): number {
    return Number((texto ?? '').split('$')[1]);
  }
}
