Feature: Produtos
  
  Cenário: Verifique se o produto foi adicionado corretamente
        Dado eu acessar a página do produto
        Quando adiciono um produto ao carrinho
        Então no carrinho devo ver o produto
