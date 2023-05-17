export { }
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


class Student {
    private name: string
    private rollno: number

    constructor(name: string, rollno: number) {
        this.name = name
        this.rollno = rollno
    }

    getName(): string {
        return this.name
    }

    getRollNo(): number {
        return this.rollno
    }
}

class Subject {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    getName(): string {
        return this.name
    }
}

class Teacher {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}

class Mark {
    private student: Student
    private subject: Subject
    private teacher: Teacher
    private mark: number


    constructor(student: Student, subject: Subject, teacher: Teacher, mark: number) {
        this.student = student;
        this.subject = subject;
        this.teacher = teacher;
        this.mark = mark;
    }
    getStudent(): Student {
        return this.student;
    }

    getSubject(): Subject {
        return this.subject;
    }

    getTeacher(): Teacher {
        return this.teacher;
    }

    getMarks(): number {
        return this.mark;
    }
}

const student = new Student("MuthuRaman M", 123);
const subject = new Subject("Science");
const teacher = new Teacher("Malar");
const mark = new Mark(student, subject, teacher, 90);

console.log("Student:", mark.getStudent().getName());
console.log("Subject:", mark.getSubject().getName());
console.log("Teacher:", mark.getTeacher().getName());
console.log("Marks:", mark.getMarks());


// <---------------------------------------------------------------->

// enum 

enum BrandOfBike {
    pulser, ktm, rs, rx, splender
}
// let b=new BrandOfBike(1)
console.log('bike brand', BrandOfBike.rs)

console.log(BrandOfBike.pulser)

// <-------------------------------------------------------------------->

// spread operation
// t is genris >>any datatype

const myfun = <T>(obj: T) => {
    return { ...obj,height:30 }

}
let a = {
    name: 'muthu',
    age: 30
}
let b=myfun(a)
console.log(b);
console.log(b.name)


