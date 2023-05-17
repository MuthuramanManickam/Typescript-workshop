export{}
// class Car{
//     engine:String;
//     constructor (engine:String){
//         console.log(this.engine =engine);
        
//     }
// }

// let car= new Car('BMW')
// let car1=new Car('BENZ')

// console.log(car1)

// class Cars{
//     constructor (public engine:String){}
// }
// let car2=new Car('AUDI')



// class Carr {
//     private _engine:string;
//     constructor(engine:string){
//         this.engine=engine
//         console.log(this.engine);
        
//     }
//     get engine():string{
//         console.log('inside a getter')
//         return this._engine;
        
        
//     }
//     set engine(value:string){
//         if (value==undefined) throw 'supply an Engine!';
//         this ._engine=value
//         console.log('inside setter');
        
//     }
// }
// // let carr= new Carr('BMW')
// // console.log(carr.engine);


// let carr1=new Carr('BENZ')
// console.log(carr1.engine);


class Engine{
   constructor( 
    public hoursePower:number,
    public engineType:string
    ){}
}


class Auto{
    engine:Engine;
    constructor(engine:Engine){
        this.engine=engine;
    }
}
class Truck extends Auto{
    fourByFour:boolean
    constructor(engine:Engine,fourByFour:boolean){
        super(engine);

        this.fourByFour=fourByFour;
    }
}
let e=new Engine(100,'cv');

console.log(e)
// console.log(t.gethoursePower())
let t = new Truck(e,true);
console.log(t)
// let car2=new Truck('AUDI')




// interface Action{
//     start(message:string)
//     stop(message:string)
// }

// class Car implements Action{
//     constructor(public engine:string){
//         this.engine=engine
//     }
//     start(message: string) {
//         console.log(this.engine+message)
//     }
//     stop(message: string) {
//         console.log(this.engine+message)
//     }

// }
// var p =new Car('scx\t')
// p.start('started')