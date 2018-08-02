var mongoose = require('mongoose');
Schema = mongoose.Schema;
var aa = () => {
    var x = new Schema({
        name: String,
        tags: [String],
        articleLinks: [String],
        tree: [aa()]
    })
}
var person = new Schema({
    name: String,
    tree: [aa()]
}, { strict: false });
module.exports = mongoose.model('person', person);