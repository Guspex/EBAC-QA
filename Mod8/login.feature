# language: pt
Funcionalidade: tela de login
Como aluno do Portal EBAC
quero me autenticar
Para visualizar minhas notas

  Contexto: 
    Dado que eu acesse a página de autenticação do portal EBAC

  Cenário: Autenticação válida
    Quando eu digitar o usuário: "joao@ebac.com.br"
    E a senha "senha@123"
    Então deve exibir uma mensagem de boas vindas "Olá joão"

  Cenário: Usuário inexistente
    Quando eu digitar o usuário: "jodas@ebac.com.br"
    E a senha "senha@123"
    Então deve exibir uma mensagem de alerta "Usuário inexistente!"

  Cenário: Autenticação inválida
    Dado que eu acesse a página de autenticação do portal EBAC
    Quando eu digitar o usuário: "joao@ebac.com.br"
    E a senha "ads@123"
    Então deve exibir uma mensagem de alerta "Usuário ou Senha incorreta!"

  Esquema do Cenário: Autenticar multiplos usuários
    Quando eu digitar <usuario>
    E a <senha>
    Então deve exibir a <mensagem> de sucesso

    Exemplos: 
      | usuario             | senha       | mensagem                     |
      | "joao@ebac.com.br"  | "senha@123" | "Olá João"                   |
      | "joasd@ebac.com.br" | "asnha@123" | "Usuário inexistente"        |
      | "joao@ebac.com.br"  | "aaha@123"  | "Senha ou Usuário inválidos" |
