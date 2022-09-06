/// <reference types="cypress"/>

describe('Testes da Funcionalidade Produtos', () => {
    let token;
    before(() => {
        cy.token('fulano@qa.com', 'teste').then(tkn => {
            token = tkn
        })
    });
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
        cy.cadastrarProduto(token, 'Produto EBAC' + Math.floor(Math.random() * 1000), Math.floor(Math.random() * 100), 'Descrição Produto Novo', Math.floor(Math.random() * 10)).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal("Cadastro realizado com sucesso")
        });
    });
    it('Deve validar mensagem de erro ao cadastrar produto repetido', () => {
        cy.cadastrarProduto(token, "Mouse 2 Guspex", 400, "Mouse", 10)
            .then((response) => {
                expect(response.status).to.equal(400)
                expect(response.body.message).to.equal("Já existe produto com este nome")
            });
    });

    it('Deve pegar um produto e alterar', () => {
        cy.request('produtos').then(response => {
            cy.log(response.body.produtos[0]._id)
            let id = response.body.produtos[0]._id
            cy.request({
                method: 'PUT',
                url: `produtos/${id}`,
                headers: {
                    authorization: token
                },
                body: {
                    "nome": produto,
                    "preco": preco,
                    "descricao": descricao,
                    "quantidade": quantidade
                }
            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.message).to.equal("Registro alterado com sucesso")
            });
        })
    });

    it('Deve alterar um produto cadastrado previamente', () => {
        cy.cadastrarProduto(token, 'Produto EBAC' + Math.floor(Math.random() * 1000), Math.floor(Math.random() * 100), 'Descrição Produto Novo', Math.floor(Math.random() * 10)).then(response => {
            cy.log(response.body.produtos[0]._id)
            let id = response.body._id
            cy.request({
                method: 'PUT',
                url: `produtos/${id}`,
                headers: {
                    authorization: token
                },
                body: {
                    "nome": produto,
                    "preco": preco,
                    "descricao": descricao,
                    "quantidade": quantidade
                }
            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.message).to.equal("Registro alterado com sucesso")
            });
        });
    });

    it('Deve deletar um produto cadastrado previamente', () => {
        cy.cadastrarProduto(token, 'Produto EBAC' + Math.floor(Math.random() * 1000), Math.floor(Math.random() * 100), 'Descrição Produto Novo', Math.floor(Math.random() * 10)).then(response => {
            cy.log(response.body.produtos[0]._id)
            let id = response.body._id
            cy.request({
                method: 'DELETE',
                url: `produtos/${id}`,
                headers: {
                    authorization: token
                }
            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.message).to.equal("Registro excluído com sucesso")
            });
        });
    });
});