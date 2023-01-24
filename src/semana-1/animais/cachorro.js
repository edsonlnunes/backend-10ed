"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
class Cachorro extends animal_1.Animal {
    emitirSom() {
        console.log("au au");
    }
}
