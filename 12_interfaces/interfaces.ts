//No js output
"No js output";
interface IAnimal {

}
//
//
//Can be merged
"Can be merged";
interface IAnimal {
    sleep(): void;
}

var a: IAnimal;
a.sleep();
//
//
//Can inherit a class
class Animal implements IAnimal {
    sleep(): void {
        "See dreams";
    }

    move(x: number, y: number): void {

    }
}

interface ICat extends Animal {

}

class Cat implements ICat {
    sleep(): void {
        "See cat dreams";
    }
    move(x: number, y: number): void {

    }
}

var cat: Cat;
cat.move(5, 10);
//
//
//Optional fields
"Optional fields";
interface IWithOptionalFields {
    required: number;
    optional?: number;
}

class WithOptionalFields implements IWithOptionalFields {
    required: number = 42;
}

function config(config:IWithOptionalFields) {
    config.required;
}({required: 42})
