import { ContaBase } from "./conta-base";

export class ContaPoupanca extends ContaBase {
  sacar(valor: number) {
    if (valor <= 0) {
      console.log("Valor inválido");
      return;
    }

    if (valor > this._saldo) {
      console.log("Saldo insuficiente");
      return;
    }

    this._saldo -= valor;
  }

  aplicarRendimento() {
    this._saldo *= 0.05;
  }
}
