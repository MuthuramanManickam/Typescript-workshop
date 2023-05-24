import { PollingWatchKind } from "typescript"

export{}
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

let a=[1,3,4]
let b=['a','b','c']
let c=['a',1,2]
let d:(string|number)[]
let e:number[]
let f:Array<number>



// genrics Function

interface pointInterface<X,Y>{
	name:string;
	age:number;
	rollno:X;
	clas:Y;
}
function fname<X,Y>(name:string,age:number,rollno:X,clas:Y):pointInterface<X,Y>{
	const point:pointInterface<X,Y> ={
		name:name,
		age:age,
		rollno:rollno,
		clas:clas
	};
	return point
}

let point1=fname<number,number>('muthu',12,101,10)
console.log(point1);


// <------------------------------------------------------------------------------->

function aname<T>(a:T):T[] {
	return[a]
}

let xo=aname<any>('muthu')
console.log(xo);

// <------------------------------------------------------------------------------------->

let array:number[]=new Array;
array.push(2)
array.push(3)
array.push(9)
array.push(6)
console.log(array)

// <--------------------------------------------------------------------------------------->