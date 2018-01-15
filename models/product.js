var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var product = new Schema({
    name: {
        type: String
    },
    price: Number,
    description: {
        type: String
    }
})
product.index({ name: 1, price: 1 }, { unique: true })
module.exports = mongoose.model('product', product)