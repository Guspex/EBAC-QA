/// <reference types="cypress" />

class LoginPage {

    get #email() {
        return cy.get("#reg_email")
    }

    get #senha() {
        return cy.get("#reg_password")
    }

    get #register() {
        return cy.get(":nth-child(4) > .button")
    }

    register(email, senha){
        this.#email.type(email)
        this.#senha.type(senha)
        this.#register.click()
    }
}

module.exports = new LoginPage()
