var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["One"] = 0] = "One";
    MyEnum[MyEnum["Two"] = 1] = "Two";
    MyEnum[MyEnum["Three"] = 2] = "Three";
})(MyEnum || (MyEnum = {}));
console.log(MyEnum.Two);
console.log(MyEnum[2]);
