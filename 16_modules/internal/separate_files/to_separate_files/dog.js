var Animals;
(function (Animals) {
    var Dog = (function () {
        function Dog() {
        }
        Dog.prototype.bark = function () {
        };
        return Dog;
    })();
    Animals.Dog = Dog;
})(Animals || (Animals = {}));
