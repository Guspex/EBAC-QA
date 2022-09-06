/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/CadastroEntrega'
import {
    faker
} from '@faker-js/faker';


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */
    let nome = faker.name.firstName();
    let sobrenome = faker.name.lastName();
    let empresa = faker.company.bs();
    let pais = 'Brasil';
    let end1 = faker.address.streetName();
    let end2 = faker.address.buildingNumber();
    let cidade = faker.address.cityName();
    let estado = 'Santa Catarina';
    let zip = faker.address.zipCode('########');
    let fone = faker.phone.number('+55 ## ##### ####');
    let email = faker.internet.email(nome);
    cy.visit('produtos/page/7')
    cy.get('[class="product-block grid"]').first().click()
    cy.adicionarProdutos('XL', 'Black', 3)
    cy.visit('produtos/page/7')
    cy.get('[class="product-block grid"]').first().click()
    cy.adicionarProdutos('L', 'Black', 4)
    cy.visit('produtos/page/7')
    cy.get('[class="product-block grid"]').first().click()
    cy.adicionarProdutos('M', 'Black', 1)
    cy.visit('checkout/') // Tive que adicionar um direcionamento direto ao checkout, pois sempre zerava o carrinho. 
    EnderecoPage.editarEndFat(nome, sobrenome, empresa, pais, end1, end2, cidade, estado, zip, fone, email)
    cy.get('#order_comments').click().type("Estou muito feliz com a minha compra, entreguem ela com carinho.")
    cy.get('#terms').click()
    cy.get('#place_order').click()
    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
})