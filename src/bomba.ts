export class BombaCombustivel {
  tipoGasolina!: string;
  private _valorLitro!: number;
  private _quantidadeBomba!: number;

  // getters e setters

  get valorLitro() {
    return this._valorLitro;
  }

  constructor(tipo: string, valor: number, quantidade: number) {
    this.tipoGasolina = tipo;
    this._valorLitro = valor;
    this._quantidadeBomba = quantidade;
  }

  recuperarValorLitro(): number {
    return this._valorLitro;
  }

  abastecerPorValor(valor: number) {
    const totalAbastecido = valor / this._valorLitro;

    if (totalAbastecido > this._quantidadeBomba) {
      console.log(
        `Não possui gasolina suficiente, a bomba possui ${this._quantidadeBomba}} litros`
      );
      return;
    }

    console.log(
      `Abastecido com sucesso!, você abasteceu ${totalAbastecido} litros`
    );
    this._quantidadeBomba -= totalAbastecido;
  }

  abastecerPorLitro(litro: number) {
    if (litro > this._quantidadeBomba) {
      console.log(
        `Não possui gasolina suficiente, a bomba possui ${this._quantidadeBomba}} litros`
      );
      return;
    }

    const valorTotal = litro * this._valorLitro;
    console.log(`A quantidade a ser paga é de ${valorTotal}`);
    this._quantidadeBomba -= litro;
  }

  alterarValor(valor: number) {
    if (valor < 0) {
      console.log("O valor informado deve ser maior que 0");
      return;
    }

    this._valorLitro = valor;
    console.log(`Valor do litro alterado para ${this._valorLitro}`);
  }

  alterarCombustivel(tipo: string) {
    this.tipoGasolina = tipo;
    console.log(`O tipo da gasolina foi alterada para ${this.tipoGasolina}`);
  }

  alterarQuantidadeCombustivel(quantidade: number) {
    if (quantidade < 0) {
      console.log("O valor informado deve ser maior que 0");
      return;
    }

    this._quantidadeBomba = quantidade;
    console.log(`A quantidade foi alterado para ${this._quantidadeBomba}`);
  }
}
