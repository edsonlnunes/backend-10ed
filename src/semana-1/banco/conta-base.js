"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBase = void 0;
class ContaBase {
    constructor(titular, numero) {
        this._titular = titular;
        this._numero = numero;
        this._saldo = 0;
    }
    alterarNomeTitular(novoNome) {
        // this._titular = novoNome;
    }
    depositar(valor) {
        this._saldo += valor;
    }
}
exports.ContaBase = ContaBase;
