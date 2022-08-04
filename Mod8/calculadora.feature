# language: pt

Funcionalidade: Calculadora
Como não sei fazer conta de cabeça
quero usar a Calculadora do sistema
para somar dois números

  Cenário: Soma de 2 números
    Dado que eu acesse a Calculadora
    Quando eu somar 2 + 2
    Então o resultado deve ser 4

  Esquema do Cenário: Soma de 2 números
    Quando eu digitar <número1> + <número2>
    Então o resultado deve ser <soma>

    Exemplos: 
      | número1 | número2 | soma   |
      | "2"     | "2"     | "4"    |
      | "28"    | "27"    | "55"   |
      | "92"    | "52"    | "144"  |
      | "29"    | "21"    | "50"   |
      | "74"    | "8"     | "82"   |
      | "1"     | "8"     | "9"    |
      | "1823"  | "882"   | "2705" |
      | "5"     | "5"     | "10"   |
      | "2"     | "9"     | "11"   |
      | "1"     | "1"     | "2"    |
      | "8"     | "7"     | "15"   |
      | "1234"  | "1232"  | "2466" |
      | "897"   | "25"    | "922"  |
      | "254"   | "12"    | "266"  |
      | "21"    | "2"     | "23"   |
      | "2"     | "22"    | "24"   |
      | "98"    | "81"    | "179"  |
      | "74"    | "62"    | "136"  |
      | "21"    | "27"    | "48"   |
      | "122"   | "42"    | "164"  |
      | "212"   | "222"   | "434"  |
