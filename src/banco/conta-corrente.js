"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const conta_base_1 = require("./conta-base");
class ContaCorrente extends conta_base_1.ContaBase {
    constructor(titular, numero, chequeEspecial) {
        super(titular, numero);
        this._chequeEspecial = chequeEspecial;
        this._taxaManutencao = 20;
    }
    sacar(valor) {
        if (valor <= 0) {
            console.log("Valor inválido");
            return;
        }
        if (valor > this._saldo + this._chequeEspecial) {
            console.log("Saldo insuficiente");
            return;
        }
        this._saldo -= valor;
    }
    cobrarTaxaManutencao() {
        this._saldo -= this._taxaManutencao;
    }
}
exports.ContaCorrente = ContaCorrente;
