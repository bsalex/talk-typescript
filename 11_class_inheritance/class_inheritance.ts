//Inheritance
class Animal {
    move(x: number, y: number): void {

    }
}

class Dog extends Animal {
    bark(): void {

    }

    move(x: number, y: number): void {
        super.move(x, y);
        this.bark();
    }
}

class Cat extends Animal {
    meow(): void {

    }

    sleep(): void {

    }

    move(x: number, y: number): void {
        super.move(x, y);
        this.sleep();
    }
}
