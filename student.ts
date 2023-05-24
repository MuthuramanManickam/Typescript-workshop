export class Student {
  private name: string;
  private rollno: number;

  constructor(name: string, rollno: number) {
    this.name = name;
    this.rollno = rollno;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.rollno;
  }

  public displayDetails(): void {
    console.log(`Name: ${this.name}, Rollno: ${this.rollno}`);
  }
}
let a = new Student(' ng', 432)
a.displayDetails();
