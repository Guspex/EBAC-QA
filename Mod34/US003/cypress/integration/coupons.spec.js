/// <reference types="cypress" />
const token = require('../fixtures/token.json') 
const data = require('../fixtures/data.json')

it('Should validate the authentication', () => {           
    cy.request({
        method: 'GET', 
        url: `coupons`, 
        failOnStatusCode: false
    }).then(response => {
        expect(response.status).to.equal(401)
        expect(response.body.message).to.contain("Sem permissão para listar recursos.")       
    })    
})

it('Should list all coupons', () => {           
        cy.request({
            method: 'GET', 
            url: `coupons`,
            headers: {authorization: token.auth}
        }).then(response => {
            expect(response.status).to.equal(200)
            expect([response.body]).to.be.instanceOf(Array)
        })    
})

it('Should list specific coupon', () => {           
    cy.request({
        method: 'GET', 
        url: `coupons/${data.id}`,
        headers: {authorization: token.auth}
    }).then(response => {
        expect(response.status).to.equal(200)
        expect([response.body]).to.be.instanceOf(Array)        
    })    
})

it.only('Should validate invalid coupon', () => {           
    cy.request({
        method: 'GET', 
        url: `coupons/${data.fake_id}`,
        headers: {authorization: token.auth}, 
        failOnStatusCode: false 
    }).then(response => {
        expect(response.status).to.equal(404)
        expect(response.body.message).to.contain("ID inválido.")        
    })    
})

it('Should create a new coupon', () => {
    let code = `Coupon ${Math.floor(Math.random() * 10000)}`           
    cy.request({
        method: 'POST', 
        url: `coupons/`,
        headers: {authorization: token.auth}, 
        body: 
        {
            "code": code,
            "amount": data.amount,
            "discount_type": data.discount_type,
            "description": data.description
          }
    }).then(response => {
        expect(response.status).to.equal(201)        
        expect([response.body]).to.be.instanceOf(Array)         
    })    
})

it('Should validate that the coupon already exists', () => {
    cy.request({
        method: 'POST', 
        url: `coupons/`,
        headers: {authorization: token.auth}, 
        body: 
        {
            "code": data.code,
            "amount": data.amount,
            "discount_type": data.discount_type,
            "description": data.description
          }, 
          failOnStatusCode: false  
    }).then(response => {
        expect(response.status).to.equal(400) 
        expect(response.body.message).to.contain("O código de cupom já existe")   
    })  
})

it('Should validate the mandatory fields', () => {
    cy.request({
        method: 'POST', 
        url: `coupons/`,
        headers: {authorization: token.auth}, 
        body: 
        {            
            "amount": data.amount,
            "discount_type": data.discount_type,
            "description": data.description
          }, 
          failOnStatusCode: false  
    }).then(response => {
        expect(response.status).to.equal(400)         
        expect(response.body.message).to.contain("Parâmetro(s) ausente(s): code")
    })  
})
