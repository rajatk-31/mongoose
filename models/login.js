var mongoose = require('mongoose')
var Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;
var login = new Schema({
    email: String,
    password: {
        type: String,
        minlength: 10,
        maxlength: 10
    }
})

login.pre('update', function(next) {
    var user = this;
    console.log(JSON.stringify(user))

    // only hash the password if it has been modified (or is new)
    // if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('login', login)