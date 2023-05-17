export{}
class Student{
    id:number
    name:string
    clas:number
// inisialize=>>
    constructor(x:number,y:string,z:number){
        this.id =x
        this.name=y
        this.clas=z
    }
}
// create ob=>>
let studentData=new Student(1,'muthuraman m',12)
console.log(studentData);
console.log(studentData.id);
console.log(studentData.clas);

// <<---------------------------------------------------------------------->>

// crete interface>

interface SubjectInterface{
    studId:number
    subject:string
    subCode:number
}

// <<------------------------------------------------------------------------->>

// implements>

class 
