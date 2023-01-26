export class Aluno {
  nome: string;
  idade: number;
  nota?: number;
  status?: string;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  validarMedia(nota: number) {
    this.nota = nota;
    if (nota > 6) {
      this.status = "Aprovado";
    } else {
      this.status = "Reprovado";
    }
  }
}
