"use strict";
exports.__esModule = true;
exports.InstrumentalistInOperatingRoom = void 0;
var Compress_1 = require("./Compress");
var Scalpel_1 = require("./Scalpel");
var InstrumentalistInOperatingRoom = /** @class */ (function () {
    function InstrumentalistInOperatingRoom() {
    }
    InstrumentalistInOperatingRoom.prototype.createCuttingTool = function () {
        return new Scalpel_1.Scalpel();
    };
    InstrumentalistInOperatingRoom.prototype.createDryingTool = function () {
        return new Compress_1.Compress();
    };
    return InstrumentalistInOperatingRoom;
}());
exports.InstrumentalistInOperatingRoom = InstrumentalistInOperatingRoom;
