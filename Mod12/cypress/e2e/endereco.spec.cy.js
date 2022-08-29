/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json')
import EnderecoPage from '../support/page-objects/endereco.page'
describe('Funcionalidade Endereço - entrega e faturamento', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    });
    it('Deve fazer cadastro de faturamento', () => {
        EnderecoPage.editarEndFat(nome, sobrenome, empresa, 'Brasil', end1, end2, cidade, 'Santa Catarina', zip, fone, email)
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
    it('Deve fazer cadastro de Entrega', () => {
        EnderecoPage.editarEndEnt(nome, sobrenome, empresa, 'Brasil', end1, end2, cidade, 'Santa Catarina', zip)
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

});