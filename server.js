var mongoose = require('mongoose')
var dbPerson = require('./models/person')

mongoose.connect('mongodb://localhost/person', err => {
    if (!err) {
        console.log("Connected to database")
    }
})

var newPerson = new dbPerson({
    name: "Rajat",
    age: 10,
    address: "Sohna road"
})
newPerson.save((err, data) => {
    if (err) {
        console.log("something went wrong")
    } else {
        console.log("saveddd.....")
    }
})

dbPerson.find({ name: "Rajat" }, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})