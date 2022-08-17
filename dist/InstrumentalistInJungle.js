"use strict";
exports.__esModule = true;
exports.InstrumentalistInJungle = void 0;
var Knife_1 = require("./Knife");
var Rag_1 = require("./Rag");
var InstrumentalistInJungle = /** @class */ (function () {
    function InstrumentalistInJungle() {
    }
    InstrumentalistInJungle.prototype.createCuttingTool = function () {
        return new Knife_1.Knife();
    };
    InstrumentalistInJungle.prototype.createDryingTool = function () {
        return new Rag_1.Rag();
    };
    return InstrumentalistInJungle;
}());
exports.InstrumentalistInJungle = InstrumentalistInJungle;
