var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var mongoose = require('mongoose')
var dbLogin = require('./models/login')

mongoose.connect('mongodb://localhost/test', err => {
    if (err) {
        console.log("Database not connected")
    } else {
        console.log('Database connected')
    }
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
    // var abc = (req, res, next) => {
    //         req.qq = 123;
    //         next()

//     }
// app.get('/add', (req, res, next) => {
//     req.qq = 123;
//     next()
// }, (req, res) => {
//     res.json({
//         value: req.qq
//     })
// })
app.post('/signUp', (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "Enter all details"
        })
    } else {
        var newLogin = new dbLogin({
            email: req.body.email,
            password: req.body.password
        })
        newLogin.save((err, data) => {
            res.json({
                success: true,
                msg: "New User created",
                data: data
            })
        })
    }
})

app.listen(4000, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server started at port 4000")
    }
});