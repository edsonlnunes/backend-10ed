import { Address } from "./address";
import { Person } from "./person";

export class Professor extends Person {
  salary: number;

  constructor(
    name: string,
    phoneNumber: string,
    email: string,
    address: Address,
    salary: number
  ) {
    super(name, phoneNumber, email, address);
    this.salary = salary;
  }
}
