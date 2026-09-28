import { Locator, Page } from '@playwright/test';

export class CartPage {
  readonly itens: Locator;
  readonly botaoCheckout: Locator;

  constructor(private readonly page: Page) {
    this.itens = page.getByTestId('inventory-item');
    this.botaoCheckout = page.getByTestId('checkout');
  }

  async irParaCheckout() {
    await this.botaoCheckout.click();
  }
}
