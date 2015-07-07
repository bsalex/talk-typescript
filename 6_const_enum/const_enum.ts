const enum Flags {
    Colored = 1,
    Favorite = 2,
    System = 4
}

var features = Flags.Colored | Flags.System;

console.log((features & Flags.System) === Flags.System); // true
console.log((features & Flags.Favorite) === Flags.Favorite); // false
