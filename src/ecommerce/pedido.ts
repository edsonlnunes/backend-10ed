import { Item } from "./item";

// tipos primitivos
// number, string, boolean, undefined, null
export class Pedido {
  numero!: string;
  responsavel!: string;
  itens!: Array<Item>;

  constructor(numero: string, responsavel: string, itens: Array<Item>) {
    this.numero = numero;
    this.responsavel = responsavel;
    this.itens = itens;
  }

  get valorTotal() {
    return this.itens.reduce((valor, item) => valor + item.calularValor(), 0);
  }
}
