"use strict";
exports.__esModule = true;
var message = "hi  to ts";
console.log(message);
// these are the datatype available in ts
// a is a init type
// any datatype
var a = 1323;
a = 1;
a = "raman";
// it is not a init so this is error 
// b=1;
// b="ran"
var b = 1.3;
b = 12;
var c = "muthu";
var d = true;
var e = null;
var f;
var arr;
var arrstr = ['muthuraman', 'ram', 'marutrhu', 'sarvan'];
var multitype;
multitype = 1;
multitype = 'hello';
var obj = {
    name: 'muthu',
    age: 21,
    location: {
        state: 'tamilnadu',
        district: 'tirunelveli'
    }
};
// error for a ts but not error in js 
// obj.age='ashok';
// console.log(obj.name);
// function sum(a,b){
// }
// function sum(a:number,b:number):number {
//    return a+b
// }
function char(a) {
    return a.toLowerCase();
}
// b?optional
// function char1(a:string,b?:string){
//     if(b){
//         return a.toLowerCase()+b;
//     }
//     return a.toLowerCase()
//  }
// //  char1('muthu','raman');
//  console.log(char1('muthu'))
//  function char2(a?:string,b:string){
//     if(a){
//         return b.toLowerCase()+a;
//     }
//     return b.toLowerCase()
//  }
// console.log(('raman'))
function add(point) {
    return point.x + point.y;
}
var p = { x: 2, y: 2 };
console.log(add(p));
function add1(point) {
    return point.x + point.y;
}
console.log(add1({ x: 4, y: 5 }));
