"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const conta_base_1 = require("./conta-base");
class ContaPoupanca extends conta_base_1.ContaBase {
    sacar(valor) {
        if (valor <= 0) {
            console.log("Valor inválido");
            return;
        }
        if (valor > this._saldo) {
            console.log("Saldo insuficiente");
            return;
        }
        this._saldo -= valor;
    }
    aplicarRendimento() {
        this._saldo *= 0.05;
    }
}
exports.ContaPoupanca = ContaPoupanca;
