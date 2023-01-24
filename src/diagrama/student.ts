import { Address } from "./address";
import { Person } from "./person";

export class Student extends Person {
  studentNumber: number;
  averageMark: number;

  constructor(
    name: string,
    phoneNumber: string,
    email: string,
    address: Address,
    studentNumber: number,
    averageMark: number
  ) {
    super(name, phoneNumber, email, address);
    this.studentNumber = studentNumber;
    this.averageMark = averageMark;
  }

  isEligibleToEnroll() {}

  getSeminarsTaken() {}
}
