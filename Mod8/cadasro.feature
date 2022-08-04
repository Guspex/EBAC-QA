# language: pt
Funcionalidade: tela de cadastro
Como cliente da loja EBAC-Shop
quero me cadastrar
Para finalizar meus pedidos

  Contexto: 
    Dado que eu acesse a página de cadastro da loja EBAC-Shop

  Cenário: Autenticação válida
    Quando eu preencher todos os campos obrigatórios
    E atender os requisitos com *
    Então deve abrir a página de "Checkout" com a mensagem de boas vindas "Bem vindo""

  Cenário: Autenticação inválida
    Quando eu digitar o email: "zezinho.com.br"
    E deixar algum campo obrigatório em branco
    Então deve exibir uma mensagem de alerta "E-mail incorreto e campos obrigatórios inválidos!"

      Cenário: Autenticação inválida
    Quando eu preencher os campos obrigatórios
    E deixar algum campo obrigatório em branco
    Então deve exibir uma mensagem de alerta "Campos obrigatórios inválidos!"