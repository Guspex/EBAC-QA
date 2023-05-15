Feature: Carrinho

Cenário: Verifique se a quantidade do produto foi atualizada corretamente
        Dado que eu adicionei um produto no carrinho
        Quando altero a quantidade do produto no carrinho
        Então devo ver o produto atualizado corretamente

Cenário: Verifique se o produto foi removido corretamente
        Dado que eu adicionei um produto no carrinho
        Quando retiro o produto do carrinho
        Então devo ver o produto removido corretamente
