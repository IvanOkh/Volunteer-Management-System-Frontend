export class FamilyMember {

  constructor(public fname: string, public lname: string, public age: number) { }

  stringify(): string {
    return this.fname + ',' + this.lname + ',' + this.age + ';';
  }
}
