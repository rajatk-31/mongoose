var mongoose = require('mongoose')
var dbLogin = require('./models/class')
    // var dbProduct = require('./models/product')
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

app.post('/add', (req, res) => {
    new dbDynamic({
        name: req.body.name,
        tree: req.body.tree
    }).save((err, done) => {
        if (err) {
            res.json({
                err: err
            })
        } else {
            res.json({
                data: data
            })
        }
    })
})

app.listen(3000, err => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server stared on port 3000")
    }
})