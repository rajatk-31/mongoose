const express = require('express');
var bodyParser = require('body-parser')
var app = express()
var mongoose = require('mongoose')
var Animal = require('./models/login')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/product', err => {
    if (err) {
        console.log(err)
    } else {
        console.log('Connected to database')
    }
})

// var dog = new Animal({ type: 'dog' })
// dog.save((err, data) => {
//         if (err) throw err
//         console.log(data)
//     })
var dog = new Animal({ name: 'Rajat' });

dog.findSimilarTypes(function(err, dogs) {
    console.log(dogs); // woof
});
// Animal.findByName('rajat', function(err, animals) {
//     console.log(animals);
// });


app.listen(4000, () => {
    console.log("PORT running on 4000")
})