"use strict";
/** 2- Crie uma classe chamada Investidor que possui as seguintes caracteristicas:
 * - Nome
 * - email
 * - Idade
 * - Genero
 * - Acoes*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Investidor = void 0;
class Investidor {
    constructor(nome, email, idade, genero, acoes) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.genero = genero;
        this.acoes = acoes;
    }
    totalInvestido() {
        let valorTotalAcao = 0;
        this.acoes.forEach((acao) => {
            valorTotalAcao += acao.totalValorInvestido();
        });
        return valorTotalAcao;
    }
    verificarAcao(acao) {
        return this.acoes.some((a) => a.ticker.toLowerCase() === acao.toLowerCase());
    }
}
exports.Investidor = Investidor;
