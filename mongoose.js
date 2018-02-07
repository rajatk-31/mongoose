var mongoose = require('mongoose')
var dbLogin = require('./models/class')
var dbProduct = require('./models/product')
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
var tokenVerify = (req, res, next) => {
    if (!req.headers['x-access-token']) { //==req.body.x-access-token
        res.json({
            msg: "Please enter credentials"
        })
    } else {
        jwt.verify(req.headers['x-access-token'], 'qwerty', (err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Please login first"
                })
            } else {
                req.decoded = data; //{name: 'djs', email: 'dhghs'}
                next();
            }
        })
    }
}

app.post('/register', (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            msg: "Please enter both details"
        })
    } else {
        var newLogin = new dbLogin({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        newLogin.save((err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Something went wrong"
                })
            } else {
                res.json({
                    success: true,
                    msg: "Data saved. Please login to continue"
                })
            }
        })
    }
})

app.post('/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "Enter all data"
        })
    } else {
        dbLogin.findOne({ email: req.body.email }, (err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Somthing went wrong"
                })
            } else if (!data || data == null) {
                res.json({
                    success: false,
                    msg: "You are not registered. Please register first."
                })
            } else if (data.password == req.body.password) {
                var obj = {
                    name: data.name,
                    email: data.email
                }
                var token = jwt.sign(obj, 'qwerty')
                res.json({
                    success: true,
                    msg: "Login successfull",
                    token: token
                })
            } else {
                res.json({
                    success: false,
                    msg: "Password mismatch"
                })
            }
        })
    }
})

app.post('/addProduct', tokenVerify, (req, res) => {
    if (!req.body.name || !req.body.price || !req.body.description) {
        res.json({
            success: false,
            msg: "Please send all details"
        })
    } else {
        var newProduct = new dbProduct({
            email: req.decoded.email,
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        })
        newProduct.save((err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Something went wrong"
                })
            } else {
                res.json({
                    success: true,
                    msg: "Data saved"
                })
            }
        })
    }
})

app.get('/allproducts', tokenVerify, (req, res) => {
    dbProduct.find({ email: req.decoded.email }, (err, data) => {
        if (err) {
            res.json({
                success: false,
                msg: "Database error"
            })
        } else {
            res.json({
                success: true,
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