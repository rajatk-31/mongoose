var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var product = new Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    description: {
        type: String
    }
})

module.exports = mongoose.model('product', product)