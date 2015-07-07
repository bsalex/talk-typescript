var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.feed = function () {
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
    return Dog;
})(Animal);
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        _super.apply(this, arguments);
    }
    Cat.prototype.meow = function () {
    };
    return Cat;
})(Animal);
var Human = (function () {
    function Human() {
    }
    Human.prototype.add = function (animal) {
        this.animals.push(animal);
    };
    Human.prototype.feedAnimals = function () {
        this.animals.forEach(function (animal) {
            animal.feed();
        });
    };
    return Human;
})();
var catHuman = new Human();
var dogHuman = new Human();
