/// <reference types="cypress" />
const faker = require('faker');

describe('Funcionalidade pré Cadastro', () => {
    let nome = faker.name.firstName()
    let sobrenome = faker.name.lastName()
    let senha = faker.internet.password()
    let email = faker.internet.email()
    beforeEach(() => {
        cy.visit('minha-conta/')
    });
    it('Deve completar com sucesso com comandos pre definidos', () => {
        cy.preCadastro(email, senha, nome, sobrenome)
    });
});