"use strict";
exports.__esModule = true;
exports.Director = void 0;
var BurgerBuilder_1 = require("./BurgerBuilder");
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBurgerbuilder = function (builder) {
        this.burgerBuilder = builder;
    };
    Director.prototype.buildBurger = function () {
        this.burgerBuilder.setBread("Corn").setMeat("Beef").setSauce("Ketchup");
        return this.burgerBuilder.build();
    };
    return Director;
}());
exports.Director = Director;
var director = new Director();
var burgerBuilder = new BurgerBuilder_1.BurgerBuilder();
director.setBurgerbuilder(burgerBuilder);
console.log(director.buildBurger());
