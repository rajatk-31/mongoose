var mongoose = require('mongoose')
var Schema = mongoose.Schema

var person = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    address: String
})

module.exports = mongoose.model('person', person)