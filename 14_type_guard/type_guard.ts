//Type Guard
class Cat {
    meow(): void {

    }
}

class Dog {
    bark(): void {

    }
}

function voice(animal: Dog|Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    }

    if (animal instanceof Cat) {
        animal.meow();
    }
}
