import { Endereco, IFrete } from "./frete";

// RedeSul é IFrete
export class RedeSul implements IFrete {
  calcularFrete(endereco: Endereco): number {
    return 30;
  }
}
