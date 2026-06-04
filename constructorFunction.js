
function Car(make, model) {
    this.make = make
    this.model = model
}

let myCar = new Car("Toyota", "Fortuner")
// console.log(myCar);
let myNewCar = new Car("tata", "punch")
// console.log(myNewCar);

function Tea(type) {
    this.type = type
    this.discription = () => {
        return ` This is the discription of ${this.type}`
    }
}

let lemonTea = new Tea("Chai")
// console.log(lemonTea.discription());


function Drink(name) {
    if (!new.target) {
        // note This throws error 
        throw new Error("The drink must be declared with new keyword");
    }
    this.name = name
}
let myTea = new Drink("Tea")
let newDrink = new Drink("mazza")
console.log(newDrink);

function Animal(species) {
    this.species = species
}

Animal.prototype.legs = function () {
    return `yeah ${this.species} has 4 legs`
}

let newDog = new Animal("dog")
console.log(newDog.legs());

let car = {
    model: "Toyota",
    make: "Fortuner",
    year: 2019,
    start: function () {
        return `${this.model} was firstly introduced in ${this.year}`
    }}

function Person(name,age){
    this.name = name
    this.age = age
}

let Smit = new Person("smit",19)
console.log(Smit);










