/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
    });
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste_aluno20 (não é teste_aluno20? Sair)')
    })
    it('Deve fazer login com sucesso - com base de dados', () => {
        cy.get('#username').type(perfil.usario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    })
    it('Deve fazer login com sucesso - com fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(perfil.usario)
            cy.get('#password').type(perfil.senha, {log:false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
        })
    })
    it('Deve mostar uma mensagem de erro de usuário inválido', () => {
        cy.get('#username').type('aluno_eb@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')

    });

    it('Deve mostar uma mensagem de erro de senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@te.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail')
    });
});