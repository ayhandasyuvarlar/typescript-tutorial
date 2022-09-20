var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taxi x localtion ".concat(point.x, "  y localtion  ").concat(point.y, " lets go"));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Bus x localtion ".concat(point.x, "  y localtion  ").concat(point.y, " lets go"));
    };
    return Bus;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.carTo = function (point) {
        console.log("".concat(point.carname, " name is car ").concat(point.x, " from the point ").concat(point.y, "to the point going , estimated time of arrival").concat(point.c));
    };
    return Car;
}());
var taxi = new Taxi();
taxi.travelTo({ x: 1, y: 2 });
var taxiTwo = new Taxi();
taxiTwo.travelTo({ x: 3, y: 1 });
var car = new Car();
car.carTo({ carname: 'Audi Rs7', x: 'Ankara', y: 'Malatya', c: 12 });
