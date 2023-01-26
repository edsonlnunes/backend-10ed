export class Acao {
  ticker: string;
  quantidade: number;
  valor: number;

  constructor(ticker: string, quantidade: number, valor: number) {
    this.ticker = ticker;
    this.quantidade = quantidade;
    this.valor = valor;
  }

  totalValorInvestido() {
    return this.quantidade * this.valor;
  }
}
