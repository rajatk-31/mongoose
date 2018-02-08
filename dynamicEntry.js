var mongoose = require('mongoose')
var dbLogin = require('./models/class')
var dbProduct = require('./models/product')
var dbDynamic = require('./models/dynamic')
var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var jwt = require('jsonwebtoken')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/product', err => {
    if (err) {
        console.log(err)
    } else {
        console.log('Connected to database')
    }
})

// new dbDynamic({
//     name: 'Rajat'
// }).save((err, data) => {
//     if (err) throw err
//     console.log(data)
// })

dbDynamic.findOne({ name: 'Rajat' }, (err, data) => {
    if (err) throw err
    console.log(data)
})


// app.listen(3000, err => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Server stared on port 3000")
//     }
// })