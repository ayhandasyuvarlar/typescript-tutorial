var Taxi = /** @class */ (function () {
    function Taxi(localtion, color) {
        this.currentLocation = localtion;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Bus x localtion ".concat(point.x, "  y localtion  ").concat(point.y, " lets go ").concat(color));
    };
    return Taxi;
}());
var taxi = new Taxi({ x: 1, y: 2 }, 'Red');
taxi.travelTo({ x: 1, y: 2 });
console.log(taxi.currentLocation);
