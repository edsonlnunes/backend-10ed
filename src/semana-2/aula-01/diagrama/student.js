"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const person_1 = require("./person");
class Student extends person_1.Person {
    constructor(name, phoneNumber, email, address, studentNumber, averageMark) {
        super(name, phoneNumber, email, address);
        this.studentNumber = studentNumber;
        this.averageMark = averageMark;
    }
    isEligibleToEnroll() { }
    getSeminarsTaken() { }
}
exports.Student = Student;
