module.exports = class Person {
    constructor(name, age){
        console.log("Hi, I am created!", name)
        this.name = name
        this.age = age
        this.meetups = []
    }
    greet(person){
        console.log("Hi"+ person.name+"my name is ", this.name)
    }
    attend(meetup){
        this.meetups.push(meetup)
        meetup.attendees.push(this)
    }
}