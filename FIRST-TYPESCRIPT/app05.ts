class Employee {
  private _fullName: string;
  private _age: number;
  private _jobTitle: string;
  private _hourlyRate: number;
  public workingHoursPerWeek: number;

  constructor(
    fullName: string,
    age?: number,
    jobTitle?: string,
    hourlyRate?: number,
    workingHoursPerWeek?: number) {
  }

  get fullName () {
    return this._fullName;
  }

  set fullName (value: string) {
      this._fullName = value;
  }

  printEmployeeDetails = (): void => {
    console.log(`${this._fullName}의 직업은 ${this._jobTitle} 이고 
    일주일의 수업은 ${this._hourlyRate * this.workingHoursPerWeek} 달러 이다.`);
  };
}

// let employee1 = new Employee();
// employee1.fullName = "Cine";
// employee1.age = 28;
// employee1.jobTitle = "주니어 개발자";
// employee1.hourlyRate = 40;
// employee1.workingHoursPerWeek = 35;
// employee1.printEmployeeDetails();

// let employee2 = new Employee();
// employee2.fullName = "KangCine";
// employee2.age = 38;
// employee2.jobTitle = "시니어 개발자";
// employee2.hourlyRate = 38;
// employee2.workingHoursPerWeek = 50;
// employee2.printEmployeeDetails();

let employee1: Employee = new Employee('Cine', 28, '주니어 개발자', 40, 35);
employee1.fullName = 'KangCine';
console.log(employee1.fullName)
employee1.printEmployeeDetails();

let employee2: Employee = new Employee('Kang', 38, '시니어 개발자', 50, 40);
employee2.printEmployeeDetails();