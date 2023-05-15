export{}
let message = "hi  to ts"
console.log(message)

// these are the datatype available in ts

// a is a init type
// any datatype
let a :any=1323;
a=1;
a="raman";

// it is not a init so this is error 
// b=1;
// b="ran"
let b:number=1.3;
b=12;

let c:string="muthu";

let d:boolean=true;

let e:null=null;

let f:undefined;

let arr:[1,2,3,4];
let arrstr:string[]=['muthuraman','ram','marutrhu','sarvan'];
let multitype:number|string;
multitype=1;
multitype='hello';

let obj = {
    name:'muthu',
    age:21,
    location:{
        state:'tamilnadu',
        district:'tirunelveli'
    }
}

// error for a ts but not error in js 
// obj.age='ashok';
// console.log(obj.name);

// function sum(a,b){

// }

// function sum(a:number,b:number):number {
//    return a+b
// }

function char(a){
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


function add(point:{x:number,y:number}) {
    return point.x+point.y
}
let p={x:2,y:2}
console.log(add(p))

// interface Point{
//     x:number,
//     y:number
// }
// function add1(point:Point){
//     return point.x+point.y;
// }
// console.log(add1(p));

interface Point{
    x:number,
    y:number,
    z?:number
}
function add1(point:Point){
    return point.x+point.y;
}
console.log(add1({x:4,y:5}));


