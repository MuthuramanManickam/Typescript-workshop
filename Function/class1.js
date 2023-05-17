"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    // inisialize=>>
    function Student(x, y, z) {
        this.id = x;
        this.name = y;
        this.clas = z;
    }
    return Student;
}());
// create ob=>>
var studentData = new Student(1, 'muthuraman m', 12);
console.log(studentData);
console.log(studentData.id);
console.log(studentData.clas);
// <<------------------------------------------------------------------------->>
// implements>
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
