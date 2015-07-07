var Animals;
(function (Animals) {
    var Cat = (function () {
        function Cat() {
        }
        Cat.prototype.meow = function () {
        };
        return Cat;
    })();
    Animals.Cat = Cat;
})(Animals || (Animals = {}));
var Animals;
(function (Animals) {
    var Dog = (function () {
        function Dog() {
        }
        Dog.prototype.meow = function () {
        };
        return Dog;
    })();
    Animals.Dog = Dog;
})(Animals || (Animals = {}));
/// <reference path="cat" />
/// <reference path="dog" />
Animals.Cat;
Animals.Dog;
