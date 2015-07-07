//Mixins
var Feedable = (function () {
    function Feedable() {
    }
    Feedable.prototype.feed = function () {
    };
    return Feedable;
})();
var Moveable = (function () {
    function Moveable() {
    }
    Moveable.prototype.run = function () {
    };
    return Moveable;
})();
var Dog = (function () {
    function Dog() {
    }
    return Dog;
})();
applyMixins(Dog, [Feedable, Moveable]);
var dog = new Dog();
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
