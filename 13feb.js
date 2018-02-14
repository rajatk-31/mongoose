var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/sample', () => {
    console.log("Database Connected")
})