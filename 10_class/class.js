var Example = (function () {
    function Example() {
    }
    Example.prototype.exampleMethod = function () {
        return 42;
    };
    return Example;
})();
var ExampleLevels = (function () {
    function ExampleLevels() {
        this.a = 42;
    }
    ExampleLevels.prototype.exampleMethod = function () {
        return this.a;
    };
    return ExampleLevels;
})();
var ExampleWithFields = (function () {
    function ExampleWithFields(a, b) {
        this.a = a;
        this.b = b;
    }
    return ExampleWithFields;
})();
var exampleWithFields = new ExampleWithFields(42, "Typescript");
var ExampleWithAccessors = (function () {
    function ExampleWithAccessors() {
    }
    Object.defineProperty(ExampleWithAccessors.prototype, "field", {
        get: function () {
            return this._field;
        },
        set: function (value) {
            this._field = value;
        },
        enumerable: true,
        configurable: true
    });
    return ExampleWithAccessors;
})();
var ExampleWithStatic = (function () {
    function ExampleWithStatic() {
    }
    ExampleWithStatic.staticField = 42;
    return ExampleWithStatic;
})();
console.log(ExampleWithStatic.staticField);
