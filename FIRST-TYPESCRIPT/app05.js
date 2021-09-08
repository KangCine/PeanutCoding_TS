var Employee = /** @class */ (function () {
    function Employee(fullName, age, jobTitle, hourlyRate, workingHoursPerWeek) {
        var _this = this;
        this.printEmployeeDetails = function () {
            console.log(_this._fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this._jobTitle + " \uC774\uACE0 \n    \uC77C\uC8FC\uC77C\uC758 \uC218\uC5C5\uC740 " + _this._hourlyRate * _this.workingHoursPerWeek + " \uB2EC\uB7EC \uC774\uB2E4.");
        };
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
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
var employee1 = new Employee('Cine', 28, '주니어 개발자', 40, 35);
employee1.fullName = 'KangCine';
console.log(employee1.fullName);
employee1.printEmployeeDetails();
var employee2 = new Employee('Kang', 38, '시니어 개발자', 50, 40);
employee2.printEmployeeDetails();
