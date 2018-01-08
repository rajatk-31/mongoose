var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var mongoose = require('mongoose')
var dbPerson = require('./models/person')

mongoose.connect('mongodb://localhost/abc', err => {
    if (!err) {
        console.log("Connected to database")
    }
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/add', (req, res) => {
    if (!req.body.name || !req.body.age || !req.body.address) {
        res.json({
            success: false,
            msg: "All details not provided"
        })
    } else {
        var person = new dbPerson({
            name: req.body.name,
            age: req.body.age,
            address: req.body.address
        })
        person.save((err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Error in database"
                })
            } else {
                res.json({
                    success: true,
                    msg: "Your data is saved"
                })
            }
        })
    }
})

app.get('/getData', (req, res) => {
    dbPerson.find({}, (err, data) => {
        if (err) {
            res.json({
                success: false,
                msg: "Database error"
            })
        } else {
            res.json({
                success: true,
                msg: "All data",
                data: data
            })
        }
    })
})


app.listen(3000);
console.log("Server started at 3000")