var singleTyped: number = 42;
singleTyped = "TypeScript";


var unionTyped: (number|string) = 5;

unionTyped = 5;
unionTyped = "234234";

function example(arg: (number|string)): (number|string) {
    return arg;
}
