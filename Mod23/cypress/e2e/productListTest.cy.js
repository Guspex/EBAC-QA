/// <reference types="cypress" />
import { productsPage, productDetailsPage } from '../support/pages'

describe('Product List', () => {

  beforeEach(() => {
    cy.visit("/produtos")
  })

  it(`Validate product detail link`, () => {
    productsPage.productList.each(product =>{
      let productDetailsLink = product.attr('href')
      let productTitle = product.attr('title')

      cy.visit(productDetailsLink).then(()=>{
        productDetailsPage.breadcrumbProduct.should('include.text', productTitle)
        productDetailsPage.productTitle.invoke('text').then(text=>{
          expect(text).to.be.equal(productTitle)
        })
        productDetailsPage.variations.find('[for]')
          .should('have.length', 2)
          .and('be.visible')
      })
    })
  })

})
