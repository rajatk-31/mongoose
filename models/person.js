var mongoose = require('mongoose')
var Schema = mongoose.Schema

var person = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    address: String,
    phone: [Number]
})

module.exports = mongoose.model('person', person)