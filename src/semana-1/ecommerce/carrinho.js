"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrinho = void 0;
// composição
// tipos primitivos
// number, string, boolean, undefined, null
class Carrinho {
    constructor(numero, responsavel) {
        this.numero = numero;
        this.responsavel = responsavel;
        this.produtos = [];
    }
    mostrarProdutos() {
        this.produtos.forEach((produto) => produto.mostrarInformacoes());
    }
    add(produto) {
        this.produtos.push(produto);
    }
}
exports.Carrinho = Carrinho;
