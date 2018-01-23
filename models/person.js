var mongoose = require('mongoose');
var schema = mongoose.Schema;
var person = new schema({
    name: String,
    phone: [Number],
    age: Number,
    email: String
})
module.exports = mongoose.model('person', person)