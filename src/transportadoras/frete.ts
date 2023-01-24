export interface IFrete {
  calcularFrete(endereco: Endereco): number;
}

export interface Endereco {
  rua: string;
  cep: string;
  numero: string;
  cidade: string;
}
