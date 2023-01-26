import { Address } from "./address";

export class Person {
  name: string;
  phoneNumber: string;
  email: string;
  address: Address;

  constructor(
    name: string,
    phoneNumber: string,
    email: string,
    address: Address
  ) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.address = address;
  }

  purchaseParkingPass() {}
}
