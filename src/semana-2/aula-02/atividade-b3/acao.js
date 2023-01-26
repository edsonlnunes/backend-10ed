"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acao = void 0;
class Acao {
    constructor(ticker, quantidade, valor) {
        this.ticker = ticker;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    totalValorInvestido() {
        return this.quantidade * this.valor;
    }
}
exports.Acao = Acao;
