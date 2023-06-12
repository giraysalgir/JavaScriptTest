
module.exports = class Meetup{
    constructor(name){
       this.name = name 
       this.attendees = []
    }
    printAttendeeNames(){
        this.attendees.forEach(printName)
    }
    //static create(obj){
    //    return new Meetup(obj.name, obj.attendees)
    //}
}
printName = person => console.log(person.name, person.age)