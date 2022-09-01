"use strict";
exports.__esModule = true;
var InstrumentalistInJungle_1 = require("./InstrumentalistInJungle");
var InstrumentalistInOperatingRoom_1 = require("./InstrumentalistInOperatingRoom");
var Surgeon = /** @class */ (function () {
    function Surgeon() {
    }
    Surgeon.prototype.operate = function (instrumentalist) {
        var cuttingTool = instrumentalist.createCuttingTool();
        var dryingTool = instrumentalist.createDryingTool();
        return console.log("cut whit a ".concat(cuttingTool.cut(), " and dry with a ").concat(dryingTool.dry()));
    };
    return Surgeon;
}());
var instrumentalistInJungle = new InstrumentalistInJungle_1.InstrumentalistInJungle();
var instrumentalistInOperatingRoom = new InstrumentalistInOperatingRoom_1.InstrumentalistInOperatingRoom();
var surgeon = new Surgeon();
console.log("Operate in the Jungle");
surgeon.operate(instrumentalistInJungle);
console.log("- - - - -");
console.log("Operate in the Operating room");
surgeon.operate(instrumentalistInOperatingRoom);
