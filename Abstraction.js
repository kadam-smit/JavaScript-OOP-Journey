//  note :- Abstraction :- Abstraction in JavaScript is the process of hiding complex implementation details and exposing only the essential features that a user needs to interact with an object.

class CoffeMachine{
    Start(){
        // Any complex code let it be 2 lines of 200 lines 
        return `starting.....`
    }
    getBrewing(){
        // fixme Again writing any logic here 

        return `Brewing started....`
    }

    getStarted(){
        let msg1 = this.Start()
        let msg2 = this.getBrewing()
        return `${msg1}\n${msg2}`
    }

}
let newCafee = new CoffeMachine()
console.log(newCafee.getStarted());


