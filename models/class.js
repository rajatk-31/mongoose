var mongoose = require('mongoose')
var Schema = mongoose.Schema

var cls = new Schema({
    name: {
        type: String,
        unique: true,
        default: "ABC",
        required: true,
    },
    age: Number,
    dob: Date
})


module.exports = mongoose.model('class', cls);