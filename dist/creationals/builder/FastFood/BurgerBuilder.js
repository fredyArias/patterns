"use strict";
exports.__esModule = true;
exports.BurgerBuilder = void 0;
var Burger_1 = require("./Burger");
var BurgerBuilder = /** @class */ (function () {
    function BurgerBuilder() {
        this.bread = "Pan";
        this.meat = "Normal";
        this.sauce = "N/A";
    }
    BurgerBuilder.prototype.build = function () {
        return new Burger_1.Burger(this.bread, this.meat, this.sauce);
    };
    BurgerBuilder.prototype.setBread = function (bread) {
        this.bread = bread;
        return this;
    };
    BurgerBuilder.prototype.setMeat = function (meat) {
        if (meat === void 0) { meat = "Beef"; }
        this.meat = meat;
        return this;
    };
    BurgerBuilder.prototype.setSauce = function (sauce) {
        this.sauce = sauce;
        return this;
    };
    return BurgerBuilder;
}());
exports.BurgerBuilder = BurgerBuilder;
