/// <reference types="cypress" />
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
        let end1 = faker.address.streetName();
        let end2 = faker.address.buildingNumber();
        let cidade = faker.address.cityName();
        let zip = faker.address.zipCode('########');
        let fone = faker.phone.number('+55 ## ##### ####');
        let email = faker.internet.email(nome);
        let pais = 'Brasil';
        let estado = 'Santa Catarina';
        beforeEach(() => {
            cy.visit('produtos/page/7')
        });
        it('Seleciona Produto', () => {
            cy.get('[class="product-block grid"]').first().click()
        });
        it('Deve adicionar ao carrinho', () => {
            let qtde = 3
            cy.get('[class="product-block grid"]').first().click()
            cy.get('.button-variable-item-XL').click()
            cy.get('.button-variable-item-Black').click()
            cy.get('.input-text').clear().type(qtde)
            cy.get('.single_add_to_cart_button').click()
            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qtde)
            cy.get('.woocommerce-message > .button').click()
            cy.get('.checkout-button').click()
            cy.get('#billing_first_name').clear().type(nome)
            cy.get('#billing_last_name').clear().type(sobrenome)
            cy.get('#billing_company').clear().type(empresa)
            cy.get('#select2-billing_country-container').click().type(pais + '{enter}')
            cy.get('#billing_address_1').clear().type(end1)
            cy.get('#billing_address_2').clear().type(end2)
            cy.get('#billing_city').clear().type(cidade)
            cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
            cy.get('#billing_postcode').clear().type(zip)
            cy.get('#billing_phone').clear().type(fone)
            cy.get('#billing_email').clear().type(email)
            cy.get('#order_comments').click().type("Estou muito feliz com a minha compra, entreguem ela com carinho.")
            cy.get('#terms').click()
            cy.get('#place_order').click()
            cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        });
})