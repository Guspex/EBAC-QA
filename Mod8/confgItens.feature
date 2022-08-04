# language: pt
Funcionalidade: tela de seleção de produtos
Como cliente no site EBAC-Shop
configurar meu produto de acordo com meu gosto e quantidade

  Contexto: 
    Dado alterar as configurações de um produto, tamanho, cor e quantidade

  Cenário: alteração válida
    Quando escolher a cor do produto
    E adiciono um total de 10 itens
    Então deve exibir uma mensagem de sucesso "Itens adicionados com sucesso!"

  Cenário: alteração inválida
    Quando escolher a cor do produto
    E adiciono 11 itens ao carrinho
    Então deve exibir uma mensagem de alerta "Limite de itens Excedido!"

  Esquema do Cenário: Alterar vários produtos
    Quando eu escolho a <cor>
    E incluir a <qtde>
    Então deve exibir a <mensagem> de sucesso

    Exemplos: 
      | cor       | qtde | mensagem                         |
      | "rosa"    | "9"  | "Itens adicionados com sucesso!" |
      | "amarelo" | "10" | "Itens adicionados com sucesso!" |
      | "azul"    | "11" | "Limite de itens Excedido!"      |
