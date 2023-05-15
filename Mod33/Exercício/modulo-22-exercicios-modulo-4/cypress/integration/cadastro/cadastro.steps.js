/// <reference types="cypress" />

import {Dado, Quando, E, Então } from 'cypress-cucumber-preprocessor/steps'
const { faker } = require('@faker-js/faker')
const { loginPage, enderecoPage } = require('../../support/page_objects')
const dadosCadastro = require('../fixtures/cadastro.json')
const dadosEndereco = require('../fixtures/endereco.json')

Dado('Eu acesso a página da minha conta', () =>{
    cy.visit('/minha-conta')
})

Quando('Eu me inscrevo com o e-mail {string} e senha {string}', () =>{
    let emailFaker = faker.internet.email();
    loginPage.register(emailFaker, dadosCadastro.senha)
})

E('Eu clico para completar os detalhes da conta', () =>{
    contaPage.complete(dadosCadastro.nome, dadosCadastro.sobrenome)
})

E('Eu clico para completar os detalhes do endereço', () =>{
    enderecoPage.endereco(dadosEndereco.nome, dadosEndereco.sobrenome, dadosEndereco.empresa, dadosEndereco.pais,
    dadosEndereco.endereco, dadosEndereco.numero, dadosEndereco.cidade, dadosEndereco.estado, dadosEndereco.cep,
    dadosEndereco.telefone, dadosEndereco.email)
})

Então('Devo ver uma mensagem de sucesso', () => {
    enderecoPage.mensagem.should('contain', 'Endereço alterado com sucesso.')
})
