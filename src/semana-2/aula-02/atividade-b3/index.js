"use strict";
/**
 * 1- Crie uma classe chamada Acao que possui as seguintes caracteristicas:
 * - Ticker
 * - Quantidade
 * - Valor
 *
 * 2- Crie uma classe chamada Investidor que possui as seguintes caracteristicas:
 * - Nome
 * - email
 * - Idade
 * - Genero
 * - Acoes
 *
 * 3- Crie uma lista de investidores e que cada investidor possui uma lista de acoes
 *
 * 4 - Mostre no terminal as seguintes informações:
 * - Os investidores que são do genêro Feminino - filter
 * - A média investida dos investidores - for of
 * - A soma investido de todos os investidores - reduce
 * - Se existe algum investidor com a ação da Arezzo - some
 * - Encontre a posição do investidor que possui a ação do Nubank - findIndex
 */
Object.defineProperty(exports, "__esModule", { value: true });
const investidor_1 = require("./investidor");
const acao_1 = require("./acao");
/*
ABC BRASIL ABCB4
ALPARGATAS ALPA4
ALUPAR ALUP11
AMBEV ABEV3
ANIMA ANIM3
AREZZO CO ARZZ3
AZUL AZUL4
B3 B3SA3
BANRISUL	BRSR6
BB SEGURIDADE BBSE3
BR PROPERTIES BRPR3
BRADESCO BBDC4
*/
const listaDeInvestidores = [];
const investidor1 = new investidor_1.Investidor("Joao", "joao@teste.com", 12, "Feminino", [
    new acao_1.Acao("BBDC4", 1200, 68),
    new acao_1.Acao("AZUL4", 20000, 29.87),
]);
listaDeInvestidores.push(investidor1);
const investidor2 = new investidor_1.Investidor("Maria", "maria@teste.com.br", 20, "feminino", [
    new acao_1.Acao("ARZZ3", 2000, 18),
    new acao_1.Acao("BRPR3", 1000, 22.45),
    new acao_1.Acao("BRSR6", 1000, 15),
    new acao_1.Acao("ALPA4", 2500, 23.68),
]);
listaDeInvestidores.push(investidor2);
const investidor3 = new investidor_1.Investidor("Bob Sponja", "bobsponja@gmail.com", 80, "Masculino", [
    new acao_1.Acao("ABCB4", 200, 2.3),
    new acao_1.Acao("ALPA4", 2000, 23.68),
    new acao_1.Acao("ARZZ3", 500, 10),
]);
listaDeInvestidores.push(investidor3);
const investidor4 = new investidor_1.Investidor("Patrick", "patrick@ilhadobikini", 20, "indefinido", [new acao_1.Acao("ABEV3", 300, 5.4)]);
listaDeInvestidores.push(investidor4);
const mulheres = listaDeInvestidores.filter((obj) => obj.genero.toLowerCase() == "feminino");
// console.log(mulheres);
/**
 {
    nome,
    idade,
    qtdAcoes,
    acoes (so nomes)
 }
 */
const resultadoMulheres = mulheres.map((im) => {
    return {
        nome: im.nome,
        idade: im.idade,
        qtdAcoes: im.acoes.reduce((result, proxima) => result + proxima.quantidade, 0),
        acoes: im.acoes.map((a) => a.ticker),
    };
});
// console.log(resultadoMulheres);
let totaInvestido = 0;
for (const inv of listaDeInvestidores) {
    totaInvestido += inv.totalInvestido();
}
// console.log(totaInvestido / listaDeInvestidores.length);
const existeInvestidorArezzo = listaDeInvestidores.some((inv) => inv.verificarAcao("ARZZ3"));
// console.log(!existeInvestidorArezzo ? "Não existe" : "Existe");
const posicao = listaDeInvestidores.findIndex((ind) => ind.verificarAcao("NUBR33"));
console.log(posicao);
