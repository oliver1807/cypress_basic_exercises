#language: pt

Funcionalidade: Tentativa de login


@login_invalido


Esquema do Cenario: Tentativa de login
    Dado que acesso a tela de login
    Quando informo o "<login>" e "<senha>" invalidos
    Entao sistema retorna a seguinte "<msg_erro>"

Exemplos:

|login                           |senha  |msg_erro              |
|mariazinha_teste_error@teste.com|12345  |Authentication failed.|
|irmao_teste_error@teste.com     |12346  |Authentication failed.|

