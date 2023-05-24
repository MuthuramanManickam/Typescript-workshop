"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(stuName, stuRollNo, stuClass) {
        this.stuName = stuName;
        this.stuRollNo = stuRollNo;
        this.stuClass = stuClass;
    }
    Student.prototype.getStu = function () {
        console.log(this.stuRollNo);
    };
    return Student;
}());
// Initializing obj
var obj = new Student('muthu', 213, 10);
obj.stuName = 'Muthu';
// print obj
obj.getStu();
console.log(obj);
console.log(obj.stuName);
console.log(obj.stuClass);
// inheritance
var Fruit = /** @class */ (function () {
    function Fruit(name) {
        this.fname = name;
    }
    return Fruit;
}());
var Quantity = /** @class */ (function (_super) {
    __extends(Quantity, _super);
    function Quantity(name, quan) {
        var _this = _super.call(this, name) || this;
        _this.fname = name;
        _this.fquan = quan;
        return _this;
    }
    return Quantity;
}(Fruit));
var Price = /** @class */ (function (_super) {
    __extends(Price, _super);
    function Price(name, quan, price) {
        var _this = _super.call(this, name, quan) || this;
        _this.fname = name;
        _this.fquan = quan;
        _this.fprice = price;
        return _this;
    }
    return Price;
}(Quantity));
var a = new Price('Apple', 1, 100);
console.log(a);
console.log(a.fname);
var Empdetails = /** @class */ (function () {
    function Empdetails(id, name) {
        this.empid = id;
        this.empname = name;
    }
    return Empdetails;
}());
var b = new Empdetails(1, 'muh');
console.log('gss', b.empid);
