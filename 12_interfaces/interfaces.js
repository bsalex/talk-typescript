"No js output";
"Can be merged";
var a;
a.sleep();
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.sleep = function () {
        "See dreams";
    };
    Animal.prototype.move = function (x, y) {
    };
    return Animal;
})();
var Cat = (function () {
    function Cat() {
    }
    Cat.prototype.sleep = function () {
        "See cat dreams";
    };
    Cat.prototype.move = function (x, y) {
    };
    return Cat;
})();
var cat;
cat.move(5, 10);
"Optional fields";
var WithOptionalFields = (function () {
    function WithOptionalFields() {
        this.required = 42;
    }
    return WithOptionalFields;
})();
function config(config) {
    config.required;
}
({ required: 42 });
