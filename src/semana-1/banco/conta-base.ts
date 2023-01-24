export abstract class ContaBase {
  protected _saldo: number;
  private _titular!: string;
  private _numero: string;

  constructor(titular: string, numero: string) {
    this._titular = titular;
    this._numero = numero;
    this._saldo = 0;
  }

  alterarNomeTitular(novoNome: string) {
    // this._titular = novoNome;
  }

  depositar(valor: number) {
    this._saldo += valor;
  }
}
