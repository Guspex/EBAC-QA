import { Locator, Page } from '@playwright/test';

export type Ordenacao = 'az' | 'za' | 'lohi' | 'hilo';

export class InventoryPage {
  readonly titulo: Locator;
  readonly itens: Locator;
  readonly nomes: Locator;
  readonly precos: Locator;
  readonly ordenacao: Locator;
  readonly badgeCarrinho: Locator;
  readonly linkCarrinho: Locator;

  constructor(private readonly page: Page) {
    this.titulo = page.getByTestId('title');
    this.itens = page.getByTestId('inventory-item');
    this.nomes = page.getByTestId('inventory-item-name');
    this.precos = page.getByTestId('inventory-item-price');
    this.ordenacao = page.getByTestId('product-sort-container');
    this.badgeCarrinho = page.getByTestId('shopping-cart-badge');
    this.linkCarrinho = page.getByTestId('shopping-cart-link');
  }

  /** Adiciona um produto ao carrinho pelo nome exibido na vitrine. */
  async adicionarAoCarrinho(nomeProduto: string) {
    await this.itens.filter({ hasText: nomeProduto }).getByRole('button', { name: 'Add to cart' }).click();
  }

  async removerDoCarrinho(nomeProduto: string) {
    await this.itens.filter({ hasText: nomeProduto }).getByRole('button', { name: 'Remove' }).click();
  }

  async ordenarPor(opcao: Ordenacao) {
    await this.ordenacao.selectOption(opcao);
  }

  async valoresDosPrecos(): Promise<number[]> {
    const textos = await this.precos.allTextContents();
    return textos.map((t) => Number(t.replace('$', '')));
  }

  async abrirCarrinho() {
    await this.linkCarrinho.click();
  }
}
