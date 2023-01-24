"use strict";
// classes sempre no padrão PascalCase
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casa = void 0;
// ? e !
// (interrogação) ? => opcional
// (exclamação) ! => confirmação
class Casa {
    constructor(corCasa, larguraCasa, janelas) {
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
    comprarCasa(valor) {
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
exports.Casa = Casa;
