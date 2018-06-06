var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var details = new Schema({
    email: {
        type: String
    },
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'people'
    },
    occupation: String,
})

module.exports = mongoose.model('details', details);