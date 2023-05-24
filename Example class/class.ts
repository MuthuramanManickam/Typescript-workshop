import { idText } from "typescript";

export{}
class Student{
    stuName:string
    stuRollNo:number
    stuClass:number


    constructor(stuName:string,stuRollNo:number,stuClass:number){
        this.stuName=stuName;
        this.stuRollNo=stuRollNo;
        this.stuClass=stuClass;
    }

    getStu(){
        console.log(this.stuRollNo);
        
    }
}

// Initializing obj
let obj=new Student('muthu',213,10)
obj.stuName='Muthu';

// print obj
obj.getStu()
console.log(obj);
console.log(obj.stuName);
console.log(obj.stuClass);



// inheritance


class Fruit{
    fname:string;

    constructor(name:string){
        this.fname=name
    }
}

class Quantity extends Fruit{
    fname: string;
    fquan:number;

    constructor(name:string,quan:number){
        super(name);
        this.fname=name
        this.fquan=quan
    }
}

class Price extends Quantity{
    fname:string;
    fquan: number;
    fprice:number;

    constructor(name:string,quan:number,price:number){
        
        super(name,quan);
        this.fname=name
        this.fquan=quan
        this.fprice=price
    }
}
let a=new Price('Apple',1,100)
console.log(a);

console.log(a.fname)


// Interface

interface EmpInterface{
    empid:number
    empname:string
}

class Empdetails implements EmpInterface{
    empid: number;
    empname: string;
    constructor(id:number,name:string){
        this.empid=id
        this.empname=name
    }
}
let b=new Empdetails(1,'muh');
console.log('gss',b.empid);
