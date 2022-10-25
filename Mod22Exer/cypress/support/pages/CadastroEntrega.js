class EnderecoPage {

    editarEndFat(nome, sobrenome, empresa, pais, end1, end2, cidade, estado, zip, fone, email) {
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
    }
}
export default new EnderecoPage()