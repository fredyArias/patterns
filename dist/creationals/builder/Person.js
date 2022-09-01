"use strict";
exports.__esModule = true;
var BasicChef_1 = require("./BasicChef");
var GourmetChef_1 = require("./GourmetChef");
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function (chef) {
        var prepareStarter = chef.prepareStarter();
        var prepareMainCourse = chef.prepareMainCourse();
        var prepareDessert = chef.prepareDessert();
        return console.log("Today i eat: \n        Starter: ".concat(prepareStarter.getDish(), ", \n        Main course: ").concat(prepareMainCourse.getDish(), ",\n        Dessert: ").concat(prepareDessert.getDish()));
    };
    return Person;
}());
var basicChef = new BasicChef_1.BasicChef();
var gourmetChef = new GourmetChef_1.GourmetChef();
var person = new Person();
person.eat(basicChef);
console.log("----");
person.eat(gourmetChef);
