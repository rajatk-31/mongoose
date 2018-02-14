var mongoose = require('mongoose')
var Schema = mongoose.Schema


var city = new Schema({
    name: String,
    state: {
        type: String,
        unique: true,
        required: true,
        default: 'sjdhghs'
    },
    schools: [{
        name: String,
        phoneno: Number,
        address: {
            line1: String,
            line2: String,
            pincode: Number
        }
    }],
    details: {
        mla: String,
        minister: String
    }
})

module.exports = mongoose.model('town', city)