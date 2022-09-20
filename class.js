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
