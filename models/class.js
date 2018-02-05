var mongoose = require('mongoose')
var Schema = mongoose.Schema

var cls = new Schema({
    name: {
        type: String,
        unique: true,
        default: "ABC",
        required: true,
    },
    email: String,
    password: String,
})


module.exports = mongoose.model('class', cls);