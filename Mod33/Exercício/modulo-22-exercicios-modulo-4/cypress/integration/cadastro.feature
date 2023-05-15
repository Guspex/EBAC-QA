Feature: Minha Conta
 
 Cenário: registrar nova conta
        Dado eu acessar a página minha conta
        Ao me cadastrar com o e-mail "<email>" e senha "<senha>"
        E eu clico para completar os detalhes do endereço
        Então eu deveria ver uma mensagem de sucesso
