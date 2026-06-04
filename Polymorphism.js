// note Polymorpohism is an OOP principle where the same method or interface can have different implementations and behaviors depending on the object that invokes it. In JavaScript, polymorphism is commonly achieved through method overriding and inheritance.

class Animal {
    speak() {
        return "Animal makes a sound";
    }
}

class Dog extends Animal {
    speak() {
        return "Dog barks";
    }
}

class Cat extends Animal {
    speak() {
        return "Cat meows";
    }
}

const dog = new Dog();
const cat = new Cat();

console.log(dog.speak());
console.log(cat.speak());



// Optimize Real world Problem/Example
class Payment {
    pay() {
        return "Processing payment...";
    }
}

class UPI extends Payment {
    pay() {
        return "Payment via UPI";
    }
}

class CreditCard extends Payment {
    pay() {
        return "Payment via Credit Card";
    }
}

upi.pay();
card.pay();