import { Endereco, IFrete } from "./frete";

export class Sedex implements IFrete {
  calcularFrete(endereco: Endereco) {
    return 20;
  }
}
