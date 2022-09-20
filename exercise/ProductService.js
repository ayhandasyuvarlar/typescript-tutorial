"use strict";
exports.__esModule = true;
exports.ProductSercive = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductSercive = /** @class */ (function () {
    function ProductSercive() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getProducts().forEach(function (p) { return _this.products.push(p); });
    }
    ProductSercive.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0];
    };
    ProductSercive.prototype.getProducts = function () {
        return this.products;
    };
    ProductSercive.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        }
        else {
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id === product.id) {
                    index = i;
                }
            }
            this.products.splice(index, 1, product);
        }
    };
    ProductSercive.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > 0) {
            this.products.splice(index, 1);
        }
    };
    ProductSercive.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductSercive;
}());
exports.ProductSercive = ProductSercive;
