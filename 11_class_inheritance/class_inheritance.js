var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.move = function (x, y) {
    };
    return Animal;
})();
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);
    }
    Dog.prototype.bark = function () {
    };
    Dog.prototype.move = function (x, y) {
        _super.prototype.move.call(this, x, y);
        this.bark();
    };
    return Dog;
})(Animal);
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        _super.apply(this, arguments);
    }
    Cat.prototype.meow = function () {
    };
    Cat.prototype.sleep = function () {
    };
    Cat.prototype.move = function (x, y) {
        _super.prototype.move.call(this, x, y);
        this.sleep();
    };
    return Cat;
})(Animal);
