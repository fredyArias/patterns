"use strict";
exports.__esModule = true;
exports.BasicChef = void 0;
var Salad_1 = require("./Salad");
var Chicken_1 = require("./Chicken");
var Custard_1 = require("./Custard");
var BasicChef = /** @class */ (function () {
    function BasicChef() {
    }
    BasicChef.prototype.prepareStarter = function () {
        return new Salad_1.Salad();
    };
    BasicChef.prototype.prepareMainCourse = function () {
        return new Chicken_1.Chicken();
    };
    BasicChef.prototype.prepareDessert = function () {
        return new Custard_1.Custard();
    };
    return BasicChef;
}());
exports.BasicChef = BasicChef;
