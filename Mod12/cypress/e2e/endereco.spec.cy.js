/// <reference types="cypress" />
import {
    faker
} from '@faker-js/faker';
const perfil = require('../fixtures/perfil.json')
import EnderecoPage from '../support/page-objects/endereco.page'
describe('Funcionalidade Endereço - entrega e faturamento', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    });
    let nome = faker.name.firstName();
    let sobrenome = faker.name.lastName();
    let empresa = faker.company.bs();
    let end1 = faker.address.streetName();
    let end2 = faker.address.buildingNumber();
    let cidade = faker.address.cityName();
    let zip = faker.address.zipCode('########');
    let fone = faker.phone.number('+55 ## ##### ####');
    let email = faker.internet.email(nome);
    it('Deve fazer cadastro de faturamento', () => {
        EnderecoPage.editarEndFat(nome, sobrenome, empresa, 'Brasil', end1, end2, cidade, 'Santa Catarina', zip, fone, email)
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
    it('Deve fazer cadastro de Entrega', () => {
        EnderecoPage.editarEndEnt(nome, sobrenome, empresa, 'Brasil', end1, end2, cidade, 'Santa Catarina', zip)
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

});