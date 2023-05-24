"use strict";
exports.__esModule = true;
// class Greeter{
// 	greeting : string;
// 	constructor(message:string){
// 	this .greeting = message;
// 	}
// 	greeet(){
// 		return 'hello' +this.greeting;
// 	}
// 	}
// <------------------------------------------------------------------------->
// Genrics
var a = [1, 3, 4];
var b = ['a', 'b', 'c'];
var c = ['a', 1, 2];
var d;
var e;
var f;
function fname(name, age, rollno, clas) {
    var point = {
        name: name,
        age: age,
        rollno: rollno,
        clas: clas
    };
    return point;
}
var point1 = fname('muthu', 12, 101, 10);
console.log(point1);
// <------------------------------------------------------------------------------->
function aname(a) {
    return [a];
}
var xo = aname('muthu');
console.log(xo);
// <------------------------------------------------------------------------------------->
var array = new Array;
array.push(2);
array.push(3);
array.push(9);
array.push(6);
console.log(array);
// <--------------------------------------------------------------------------------------->
