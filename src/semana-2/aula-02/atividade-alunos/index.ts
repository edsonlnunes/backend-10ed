import { Aluno } from "./aluno";

const listaAlunos = [
  new Aluno("Lucas", 12),
  new Aluno("Pedro", 15),
  new Aluno("Junior", 18),
  new Aluno("Carlos", 19),
  new Aluno("Carlos", 19),
  new Aluno("Carlos", 19),
  new Aluno("Luana", 15),
];

const gabarito = ["A", "C", "B", "A", "A", "B", "C", "A", "B", "C"];

const options = ["A", "B", "C"];

listaAlunos.forEach((aluno) => {
  let respostas = [];
  for (let index = 0; index < gabarito.length; index++) {
    const sorteio = Math.floor(Math.random() * 3);
    respostas.push(options[sorteio]);
  }

  let respostasCertas = 0;

  for (let index = 0; index < respostas.length; index++) {
    if (respostas[index] == gabarito[index]) {
      respostasCertas++;
    }
  }

  aluno.validarMedia(respostasCertas);
});

const aprovados = listaAlunos.filter(
  (aluno) => aluno.status?.toUpperCase() === "APROVADO"
);
const reprovados = listaAlunos.filter(
  (aluno) => aluno.status?.toUpperCase() === "REPROVADO"
);

const somaDasNotas = listaAlunos.reduce(
  (soma, proximo) => soma + proximo.nota!,
  0
);

const media = somaDasNotas / listaAlunos.length;

listaAlunos.sort((a1, a2) => a1.nota! - a2.nota!);

const melhorAluno = listaAlunos.sort((a1, a2) => a1.nota! - a2.nota!)[0];
const piorAluno = listaAlunos.sort((a1, a2) => a1.nota! - a2.nota!)[
  listaAlunos.length - 1
];

console.log(`Melhor aluno: ${melhorAluno.nome}, Nota: ${melhorAluno.nota}`);
console.log(`Pior aluno: ${piorAluno.nome}, Nota: ${piorAluno.nota}`);
