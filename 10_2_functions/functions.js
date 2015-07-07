function exampleArgType(x) {
}
function exampleReturnType(x) {
    return x;
}
function exampleOptionalArgument(x) {
    if (x) {
        return x;
    }
    return 0;
}
function exampleDefaultArgument(x) {
    if (x === void 0) { x = 0; }
    return x;
}
function exampleRestArguments(x) {
    var restOfX = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfX[_i - 1] = arguments[_i];
    }
}
