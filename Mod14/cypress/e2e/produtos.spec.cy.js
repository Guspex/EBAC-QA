/// <reference types="cypress"/>

describe('Testes da Funcionalidade Produtos', () => {
    it('Teste para listar produtos', () => {
        cy.request({
            method: 'GET',
            url: '/produtos'
        }).then((response) => {
            expect(response.body.produtos[0].nome).to.equal("Logitech MX Vertical")
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('produtos')
            expect(response.duration).to.be.lessThan(10)
        })
    });

    it.only('Cadastrar novo produto', () => {
        cy.request({
            method: 'POST',
            url: 'produtos',
            body: {
                "nome": "Mouse 2 Guspex",
                "preco": 770,
                "descricao": "Mouse",
                "quantidade": 100
              },
              headers: {authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFub0BxYS5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNjYxODc2NjA2LCJleHAiOjE2NjE4NzcyMDZ9.v_7PcXxtzQunp39KivtsDG2DkAy8tQhXJ-8y6Y9GqrM'}
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal("Cadastro realizado com sucesso")
        });
    });
})