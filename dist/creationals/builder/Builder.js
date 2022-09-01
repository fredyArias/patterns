var Director = /** @class */ (function () {
    function Director(builder) {
    }
    return Director;
}());
var ConcreteBuilder = /** @class */ (function () {
    function ConcreteBuilder() {
    }
    ConcreteBuilder.prototype.buildPart = function () { };
    ConcreteBuilder.prototype.getResult = function () { };
    return ConcreteBuilder;
}());
