"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
// tipos primitivos
// number, string, boolean, undefined, null
class Pedido {
    constructor(numero, responsavel, itens) {
        this.numero = numero;
        this.responsavel = responsavel;
        this.itens = itens;
    }
    get valorTotal() {
        return this.itens.reduce((valor, item) => valor + item.calularValor(), 0);
    }
}
exports.Pedido = Pedido;
