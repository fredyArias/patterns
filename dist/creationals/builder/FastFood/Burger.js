"use strict";
exports.__esModule = true;
exports.Burger = void 0;
var Burger = /** @class */ (function () {
    function Burger(bread, meat, sauce) {
        this.bread = bread;
        this.meat = meat;
        this.sauce = sauce;
    }
    Burger.prototype.getBread = function () {
        return this.bread;
    };
    Burger.prototype.getMeat = function () {
        return this.meat;
    };
    Burger.prototype.getSauce = function () {
        return this.sauce;
    };
    return Burger;
}());
exports.Burger = Burger;
