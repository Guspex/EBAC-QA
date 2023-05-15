/// <reference types="cypress" />
import { homePage, productSearchPage } from '../support/pages'
const data = require('../fixtures/data.json')


describe('Product Search', () => {

  before(()=>{
    cy.intercept({
      url: '/wp-admin/admin-ajax*',
      query: { term: "EBAC" }
    }, req => {
      req.reply(
        {
          statusCode: 200,
          body: `${req.query.callback}(
            ${JSON.stringify(
              data.autocompleteSearchData
            )}
          )`
        })
    })
  })

  beforeEach(() => {
    cy.visit("/")
  })


  data.autocompleteSearchData.forEach(item=>{
    it(`Product ${item.label} should be return correctly`, () => {
      homePage.searchMagnifier()
      productSearchPage.search(item.label)
      productSearchPage.productList.first().should('have.attr', 'title', item.label)
      productSearchPage.productList.each(el=>{
        expect(el.attr('title')).eq(item.label)
      })
    });
  })

})
