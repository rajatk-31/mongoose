var mongoose = require('mongoose');
Schema = mongoose.Schema;
var person = new Schema(Schema.Types.Mixed, { strict: false });
module.exports = mongoose.model('person', person);