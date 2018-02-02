var mongoose = require('mongoose')
var Schema = mongoose.Schema
    // define a schema
var animalSchema = new Schema({ name: String, type: String });

// assign a function to the "methods" object of our animalSchema
animalSchema.statics.findByName = function(name, cb) {
    return this.find({ name: new RegExp(name, 'i') }, cb);
};
animalSchema.methods.findSimilarTypes = function(cb) {
    console.log(this.name)
    return this.model('Animal').find({ name: this.name }, cb);
};
module.exports = mongoose.model('Animal', animalSchema);