/** 2- Crie uma classe chamada Investidor que possui as seguintes caracteristicas:
 * - Nome
 * - email
 * - Idade
 * - Genero
 * - Acoes*/

import { Acao } from "./acao";

export class Investidor {
  nome: string;
  email: string;
  idade: number;
  genero: string;
  acoes: Acao[];

  constructor(
    nome: string,
    email: string,
    idade: number,
    genero: string,
    acoes: Acao[]
  ) {
    this.nome = nome;
    this.email = email;
    this.idade = idade;
    this.genero = genero;
    this.acoes = acoes;
  }

  totalInvestido() {
    let valorTotalAcao = 0;
    this.acoes.forEach((acao) => {
      valorTotalAcao += acao.totalValorInvestido();
    });
    return valorTotalAcao;
  }

  verificarAcao(acao: string) {
    return this.acoes.some(
      (a) => a.ticker.toLowerCase() === acao.toLowerCase()
    );
  }
}
