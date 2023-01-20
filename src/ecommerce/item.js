"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(valor, nome, imagens, desconto) {
        this.valor = valor;
        this.nome = nome;
        this.categoria = "Geral";
        this.desconto = desconto !== null && desconto !== void 0 ? desconto : 0;
        this.imagens = imagens;
    }
    calularValor() {
        const valorDesconto = this.valor * this.desconto;
        return this.valor - valorDesconto;
    }
}
exports.Item = Item;
