"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    validarMedia(nota) {
        this.nota = nota;
        if (nota > 6) {
            this.status = "Aprovado";
        }
        else {
            this.status = "Reprovado";
        }
    }
}
exports.Aluno = Aluno;
