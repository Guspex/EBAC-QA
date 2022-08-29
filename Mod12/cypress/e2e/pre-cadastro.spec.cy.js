/// <reference types="cypress" />

describe('Funcionalidade pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });
    it('Deve completar com sucesso com comandos pre definidos', () => {
        cy.preCadastro(email, senha, nome, sobrenome)
    });
});