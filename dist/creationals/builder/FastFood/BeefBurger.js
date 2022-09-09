"use strict";
exports.__esModule = true;
exports.BeefBurger = void 0;
var Burger_1 = require("./Burger");
var BeefBurger = /** @class */ (function () {
    function BeefBurger() {
    }
    BeefBurger.prototype.build = function () {
        return new Burger_1.Burger(this.bread, this.meat, this.sauce);
    };
    BeefBurger.prototype.setBread = function (bread) {
        this.bread = bread;
        return this;
    };
    BeefBurger.prototype.setMeat = function (meat) {
        this.meat = meat;
        return this;
    };
    BeefBurger.prototype.setSauce = function (sauce) {
        this.sauce = sauce;
        return this;
    };
    return BeefBurger;
}());
exports.BeefBurger = BeefBurger;
