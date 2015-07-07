//Simple
class Example {
    constructor() {

    }

    exampleMethod(): number {
        return 42;
    }
}

//
//
//private/protected/public
class ExampleLevels {
    private a: number;

    constructor() {
        this.a = 42;
    }

    exampleMethod(): number {
        return this.a;
    }
}

//
//
//Constructor arguments to fields
class ExampleWithFields {
    constructor(private a: number, public b: string) {
    }
}

var exampleWithFields: ExampleWithFields = new ExampleWithFields(42, "Typescript");
//
//
//Accessors
class ExampleWithAccessors {
    private _field: string;

    get field(): string {
        return this._field;
    }

    set field(value: string) {
        this._field = value;
    }
}

//
//
//Static
class ExampleWithStatic {
    static staticField: number = 42;
}

console.log(ExampleWithStatic.staticField);
