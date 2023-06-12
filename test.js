const Database = require("./database")
const Meetup = require("./meetup")
const loadedFile = Database.load("./meetup.json")

const wtmb = Meetup.create(loadedFile)
console.log(wtmb.attendees)

