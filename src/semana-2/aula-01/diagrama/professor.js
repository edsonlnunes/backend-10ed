"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
const person_1 = require("./person");
class Professor extends person_1.Person {
    constructor(name, phoneNumber, email, address, salary) {
        super(name, phoneNumber, email, address);
        this.salary = salary;
    }
}
exports.Professor = Professor;
