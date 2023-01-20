export class Item {
  valor!: number;
  nome!: string;
  categoria!: string;
  desconto!: number;
  imagens!: Array<string>;

  constructor(
    valor: number,
    nome: string,
    imagens: Array<string>,
    desconto?: number
  ) {
    this.valor = valor;
    this.nome = nome;
    this.categoria = "Geral";
    this.desconto = desconto ?? 0;
    this.imagens = imagens;
  }

  calularValor(): number {
    const valorDesconto = this.valor * this.desconto;
    return this.valor - valorDesconto;
  }
}
