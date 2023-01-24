import { Endereco, IFrete } from "./frete";

export class Dhl implements IFrete {
  calcularFrete(endereco: Endereco): number {
    return 10;
  }
}
