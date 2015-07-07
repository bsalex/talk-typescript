//Mixins

class Feedable {
    feed() {

    }
}

class Moveable {
    run() {

    }
}

//Class

class Dog implements Feedable, Moveable {
    // Feedable
    feed: () => any;
    // Moveable
    run: () => any;
}

applyMixins(Dog, [Feedable, Moveable]);
var dog = new Dog();

////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    });
}
