var Cat = (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
    };
    return Cat;
})();
var Dog = (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
    };
    return Dog;
})();
function voice(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    if (animal instanceof Cat) {
        animal.meow();
    }
}
