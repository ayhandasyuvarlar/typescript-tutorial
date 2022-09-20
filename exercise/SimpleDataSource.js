"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, 'Samsung S5', 'Mobile', '1000'), new Product_1.Product(1, 'Samsung S5', 'Mobile', '1000'), new Product_1.Product(1, 'Samsung S5', 'Mobile', '1000'), new Product_1.Product(1, 'Samsung S5', 'Mobile', '1000'));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
