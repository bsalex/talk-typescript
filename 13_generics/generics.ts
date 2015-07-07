class Animal {
    feed() {

    }
}

class Dog extends Animal {
    bark() {

    }
}

class Cat extends Animal {
    meow() {

    }
}

class Human<T extends Animal> {
    private animals: T[];

    add(animal: T) {
        this.animals.push(animal);
    }

    feedAnimals(): void {
        this.animals.forEach((animal) => {
            animal.feed();
        })
    }
}


var catHuman = new Human<Cat>();
var dogHuman = new Human<Dog>();
