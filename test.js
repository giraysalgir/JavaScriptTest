const Database = require("./database")
const Meetup = require("./meetup")
const Person = require("./person")

const wtmb = new Meetup("wtmb")
Database.save("berlin.json", wtmb)


const loadedFile = Database.load(".berlin.json")

