import { Animal } from "./animal";

export class Gato extends Animal {
  emitirSom(): void {
    console.log("miau");
  }
}
