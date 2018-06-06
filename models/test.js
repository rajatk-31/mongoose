var mongoose = require('mongoose')
var Schema = mongoose.Schema

var test = new Schema({
    name: String,
    age: [{
        name: String,
        id: Number
    }]
})

module.exports = mongoose.model('test', test)