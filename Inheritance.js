

class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model
    }

    start() {
        return `${this.make} company has one of the best suv's named ${this.model}`
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.model} is a manual and auto both `
    }
}
let Fortuner = new Car("Toyota", "Fortuner")
// console.log(Fortuner.drive());
// console.log(Fortuner.start());
/* Fortuner is a manual and auto both 
Toyota company has one of the best suv's named Fortuner */


class Animal {
    constructor(type, species) {
        this.type = type
        this.species = species
    }
    speak() {
        return `Yeah ${this.type} of ${this.species} speaks but we cant uderstand `
    }
}

class Runs extends Animal {
    walks() {
        return `Yeah ${this.type} is a ${this.species} and runs much faster than rest`
    }
}

let Cheeta = new Runs("cheeta", "cat")
// console.log(Cheeta.walks());










