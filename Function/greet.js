var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greeet = function () {
        return 'hello' + this.greeting;
    };
    return Greeter;
}());
