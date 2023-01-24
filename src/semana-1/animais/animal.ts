export class Animal {
  nome!: string;
  raca!: string;

  emitirSom() {
    console.log("Sem som, pois é genérico");
  }

  andar() {}

  correr() {}

  comer() {}
}
