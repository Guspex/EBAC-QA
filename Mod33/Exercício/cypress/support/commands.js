/// <reference types='cypress' />

Cypress.Commands.add('addProduct', (size, color, quantity, add_cart, product_id, variation_id) => {
    const fd = new FormData()
    fd.append('attribute_size', size)
    fd.append('attribute_color', color)
    fd.append('quantity', quantity)
    fd.append('add-to-cart', add_cart)
    fd.append('product_id', product_id)
    fd.append('variation_id', variation_id)

    cy.request({
        url: 'product/abominable-hoodie/',
        method: 'POST',
        body: fd
    }).then(response => {
        response.headers['set-cookie'].forEach(cookie =>{
            const firstPart = cookie.split(';')[0]
            const divisor = firstPart.indexOf('=')
            const chave = firstPart.substring(0, divisor)
            const valor = firstPart.substring(divisor+1)
            cy.setCookie(chave, valor)
        })
    })
    cy.visit('http://lojaebac.ebaconline.art.br/carrinho/')            
})

Cypress.Commands.add('placeOrder', (email, senha) => {
    cy.get('.checkout-button').click()
    cy.get('.showlogin').click()
    cy.get('#username').type(email)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-button').click()
    cy.get('#terms').click()
    cy.wait(5000)
    cy.get('#place_order').click()
})
