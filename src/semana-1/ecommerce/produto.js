"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
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
    aplicarCupomDeDesconto(cupom) { }
    mostrarInformacoes() {
        console.log(`Produto: ${this.nome}, Valor: R$${this.valor}, Categoria: ${this.categoria}`);
    }
}
exports.Produto = Produto;
