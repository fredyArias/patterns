"use strict";
exports.__esModule = true;
exports.GourmetChef = void 0;
var Oyster_1 = require("./Oyster");
var Sirloin_1 = require("./Sirloin");
var Souffle_1 = require("./Souffle");
var GourmetChef = /** @class */ (function () {
    function GourmetChef() {
    }
    GourmetChef.prototype.prepareStarter = function () {
        return new Oyster_1.Oyster();
    };
    GourmetChef.prototype.prepareMainCourse = function () {
        return new Sirloin_1.Sirloin();
    };
    GourmetChef.prototype.prepareDessert = function () {
        return new Souffle_1.Souffle();
    };
    return GourmetChef;
}());
exports.GourmetChef = GourmetChef;
