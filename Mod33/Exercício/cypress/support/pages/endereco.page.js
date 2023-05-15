/// <reference types="cypress" />

class EnderecoPage {

    get #cadEndereco() {
        return cy.get(".woocommerce-MyAccount-navigation-link--edit-address > a")
    }

    get #billing(){
        return cy.get(":nth-child(1) > .title > .edit")
    }

    get #nome(){
        return cy.get("#billing_first_name")
    }

    get #sobrenome(){
        return cy.get("#billing_last_name")
    }

    get #empresa(){
        return cy.get("#billing_company")
    }

    get #pais(){
        return cy.get("#select2-billing_country-container")
    }

    get #endereco(){
        return cy.get("#billing_address_1")
    }

    get #numero(){
        return cy.get("#billing_address_2")
    }

    get #cidade(){
        return cy.get("#billing_city")
    }

    get #estado(){
        return cy.get("#select2-billing_state-container")
    }

    get #cep(){
        return cy.get("#billing_postcode")
    }

    get #phone(){
        return cy.get("#billing_phone")
    }

    get #email(){
        return cy.get("#billing_email")
    }

    get #salvar(){
        return cy.get(".button")
    }

    get mensagem(){
        return cy.get(".woocommerce-message")
    }
    
    endereco(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep, telefone, email){        
        this.#cadEndereco.click()
        this.#billing.click()
        this.#nome.clear().type(nome)
        this.#sobrenome.clear().type(sobrenome)
        this.#empresa.clear().type(empresa)
        this.#pais.type(pais).get('[aria-selected="true"]').click()
        this.#endereco.clear().type(endereco)
        this.#numero.clear().type(numero)
        this.#cidade.clear().type(cidade)
        this.#estado.type(estado +'{enter}')
        this.#cep.clear().type(cep)
        this.#phone.clear().type(telefone)
        this.#email.clear().type(email)
        this.#salvar.click()
    }
}

module.exports = new EnderecoPage()
