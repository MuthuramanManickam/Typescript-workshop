"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// class Student{
//     id:number
//     name:string
//     clas:number
// // inisialize=>>
//     constructor(x:number,y:string,z:number){
//         this.id =x
//         this.name=y
//         this.clas=z
//     }
// }
// // create ob=>>
// let studentData=new Student(1,'muthuraman m',12)
// console.log(studentData);
// console.log(studentData.id);
// console.log(studentData.clas);
// // <<---------------------------------------------------------------------->>
// // crete interface>
// interface SubjectInterface{
//     studId:number
//     subject:string
//     subCode:number
// }
// // <<------------------------------------------------------------------------->>
// // implements>
// class Subject implements SubjectInterface{
//     studId: number
//     subject: string
//     subCode: number
//     constructor(a:number,b:string,c:number){
//         this.studId=a
//         this.subject=b
//         this.subCode=c
//     }
//     getdata=()=>{
//         return this.subCode
//      }
// }
// let obj=new Subject(1,'English',21)
// console.log(obj)
// console.log(obj.subject);
// <------------------------------------------------------------------------------------>>
var Student = /** @class */ (function () {
    function Student(name, rollno) {
        this.name = name;
        this.rollno = rollno;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getRollNo = function () {
        return this.rollno;
    };
    return Student;
}());
var Subject = /** @class */ (function () {
    function Subject(name) {
        this.name = name;
    }
    Subject.prototype.getName = function () {
        return this.name;
    };
    return Subject;
}());
var Teacher = /** @class */ (function () {
    function Teacher(name) {
        this.name = name;
    }
    Teacher.prototype.getName = function () {
        return this.name;
    };
    return Teacher;
}());
var Mark = /** @class */ (function () {
    function Mark(student, subject, teacher, mark) {
        this.student = student;
        this.subject = subject;
        this.teacher = teacher;
        this.mark = mark;
    }
    Mark.prototype.getStudent = function () {
        return this.student;
    };
    Mark.prototype.getSubject = function () {
        return this.subject;
    };
    Mark.prototype.getTeacher = function () {
        return this.teacher;
    };
    Mark.prototype.getMarks = function () {
        return this.mark;
    };
    return Mark;
}());
var student = new Student("MuthuRaman M", 123);
var subject = new Subject("Science");
var teacher = new Teacher("Malar");
var mark = new Mark(student, subject, teacher, 90);
console.log("Student:", mark.getStudent().getName());
console.log("Subject:", mark.getSubject().getName());
console.log("Teacher:", mark.getTeacher().getName());
console.log("Marks:", mark.getMarks());
// <---------------------------------------------------------------->
// enum 
var BrandOfBike;
(function (BrandOfBike) {
    BrandOfBike[BrandOfBike["pulser"] = 0] = "pulser";
    BrandOfBike[BrandOfBike["ktm"] = 1] = "ktm";
    BrandOfBike[BrandOfBike["rs"] = 2] = "rs";
    BrandOfBike[BrandOfBike["rx"] = 3] = "rx";
    BrandOfBike[BrandOfBike["splender"] = 4] = "splender";
})(BrandOfBike || (BrandOfBike = {}));
// let b=new BrandOfBike(1)
console.log('bike brand', BrandOfBike.rs);
console.log(BrandOfBike.pulser);
// <-------------------------------------------------------------------->
// spread operation
// t is genris >>any datatype
var myfun = function (obj) {
    return __assign(__assign({}, obj), { height: 30 });
};
var a = {
    name: 'muthu',
    age: 30
};
var b = myfun(a);
console.log(b);
console.log(b.name);
