"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
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
var Engine = /** @class */ (function () {
    function Engine(hoursePower, engineType) {
        this.hoursePower = hoursePower;
        this.engineType = engineType;
    }
    return Engine;
}());
var Auto = /** @class */ (function () {
    function Auto(engine) {
        this.engine = engine;
    }
    return Auto;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(engine, fourByFour) {
        var _this = _super.call(this, engine) || this;
        _this.fourByFour = fourByFour;
        return _this;
    }
    return Truck;
}(Auto));
var e = new Engine(100, 'cv');
console.log(e);
// console.log(t.gethoursePower())
var t = new Truck(e, true);
console.log(t);
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
