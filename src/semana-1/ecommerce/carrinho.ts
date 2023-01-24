import { Produto } from "./produto";

// composição

// tipos primitivos
// number, string, boolean, undefined, null
export class Carrinho {
  numero!: string;
  responsavel!: string;
  produtos!: Array<Produto>;

  constructor(numero: string, responsavel: string) {
    this.numero = numero;
    this.responsavel = responsavel;
    this.produtos = [];
  }

  mostrarProdutos() {
    this.produtos.forEach((produto) => produto.mostrarInformacoes());
  }

  add(produto: Produto) {
    this.produtos.push(produto);
  }
}
