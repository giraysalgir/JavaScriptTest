const Chalk = require("chalk")
module.exports = class Meetup{
    constructor(name, attendees = []){
       this.name = name 
       this.attendees = attendees
    }
    printAttendeeNames(){
        this.attendees.forEach(printName)
        
    }
    static create(obj){
        return new Meetup(obj.name, obj.attendees)
    }
}
printName = person => console.log(Chalk.bgGreen(person.name, person.age))