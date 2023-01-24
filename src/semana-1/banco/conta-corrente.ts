import { ContaBase } from "./conta-base";

export class ContaCorrente extends ContaBase {
  private _chequeEspecial: number;
  private _taxaManutencao: number;

  constructor(titular: string, numero: string, chequeEspecial: number) {
    super(titular, numero);
    this._chequeEspecial = chequeEspecial;
    this._taxaManutencao = 20;
  }

  sacar(valor: number) {
    if (valor <= 0) {
      console.log("Valor inválido");
      return;
    }

    if (valor > this._saldo + this._chequeEspecial) {
      console.log("Saldo insuficiente");
      return;
    }

    this._saldo -= valor;
  }

  cobrarTaxaManutencao() {
    this._saldo -= this._taxaManutencao;
  }
}
