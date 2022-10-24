/// <reference types="cypress" />
class RegisterPage {
    get #user() { return cy.get("#reg_email")}
    get #pass() { return cy.get("#reg_password")}
    get #register() { return cy.get('button[type=submit]').as('Register')}

    login(user, pass){
        this.#user.wait(200).type(user, {force: true})
        this.#pass.type(pass)
        this.#register.click()
    }
}

module.exports = new RegisterPage()