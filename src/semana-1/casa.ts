// classes sempre no padrão PascalCase

// ? e !
// (interrogação) ? => opcional
// (exclamação) ! => confirmação
export class Casa {
  // Atributos ou Propriedades
  qtdJanelas: number;
  largura: number;
  altura: number;
  cor: string;
  estaAVenda: boolean;

  constructor(corCasa: string, larguraCasa: number, janelas: number) {
    this.cor = corCasa;
    this.largura = larguraCasa;
    this.qtdJanelas = janelas;
    this.altura = 2;
    this.estaAVenda = true;
  }

  // Ações ou Métodos
  abrirJanelas() {
    // codigo ....
    console.log(`Abrindo as janelas da casa de cor ${this.cor}`);
  }

  comprarCasa(valor: number) {
    if (valor < 1000) {
      console.log("Não quero nem conversa");
      return;
    }

    if (!this.estaAVenda) {
      console.log("A casa não está a venda");
      return;
    }

    console.log("Parabéns, você comprou a casa!");
    this.estaAVenda = false;
  }
}
