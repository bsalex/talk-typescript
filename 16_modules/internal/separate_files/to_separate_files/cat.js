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
