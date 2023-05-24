"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, rollno) {
        this.name = name;
        this.rollno = rollno;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getAge = function () {
        return this.rollno;
    };
    Student.prototype.displayDetails = function () {
        console.log("Name: ".concat(this.name, ", Rollno: ").concat(this.rollno));
    };
    return Student;
}());
exports.Student = Student;
var a = new Student(' ng', 432);
a.displayDetails();
