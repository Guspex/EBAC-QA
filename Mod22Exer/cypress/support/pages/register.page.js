/// <reference types="cypress" />
class RegisterPage {
    get #user() { return cy.get("#reg_email")}
    get #pass() { return cy.get("#reg_password")}
    get #register() { return cy.get(':nth-child(4) > .button')}

    register(user, password){
        this.#user.wait(200).type(user, {force: true})
        this.#pass.type(password)
        this.#register.click()
    }
}

module.exports = new RegisterPage()