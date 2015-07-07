//Argument type
function exampleArgType(x: number) {

}


//Return value type
function exampleReturnType(x: number): number {
    return x;
}


//Optional argument
function exampleOptionalArgument(x: number): number {
    if (x) {
        return x;
    }

    return 0;
}


//Default argument value
function exampleDefaultArgument(x: number = 0): number {
    return x;
}

//Rest arguments
function exampleRestArguments(x: number, ...restOfX: number[]) {

}
