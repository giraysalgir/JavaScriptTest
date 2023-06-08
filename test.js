const Person = require("./person.js") 

class Meetup{
    constructor(name){
       this.name = name 
       this.attendees = [] 
    }
    printAttendeeNames(){
        this.attendees.forEach(printName)
        
    }
}
printName = person => console.log(person.name, person.age)

const mert = new Person("Mert", 34)
const armagan = new Person("Armagan", 35)
mert.greet(armagan)

const wtmb = new Meetup("WTM Berlin")
armagan.attend(wtmb)
mert.attend(wtmb)
wtmb.printAttendeeNames()