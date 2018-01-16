var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var mongoose = require('mongoose');
var cls = require('./models/class')
mongoose.connect('mongodb://localhost/class', err => {
    if (err) {
        console.log("Database not connected")
    } else {
        console.log('Database connected')
    }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/addnew', (req, res) => {
    console.log(req.body)
    if (!req.body.name || !req.body.dob || !req.body.age) {
        res.json({
            success: false,
            msg: "All details not provided"
        })
    } else {
        var newStu = new cls({
            name: req.body.name,
            age: req.body.age,
            dob: req.body.dob
        })
        newStu.save((err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Data not saved"
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

app.get('/get', (req, res) => {
    if (!req.headers['name']) {
        res.json({
            success: false,
            msg: "No name inserted"
        })
    } else {
        cls.findOne({ name: req.headers.name }, (err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "database error"
                })
            } else if (!data || data == null) {
                res.json({
                    success: false,
                    msg: "No user found with this name"
                })
            } else {
                res.json({
                    success: true,
                    msg: "Data",
                    data: data
                })
            }
        })
    }
})




// var abc = new cls({
//     name: "lxkfnbj",
//     age: 22,
//     dob: "2018-01-16T06:27:59.861Z"
// })

// abc.save((err, data) => {
//     if (err) {
//         console.log("Database error")
//     } else {
//         console.log("New data created.")
//     }
// })

// cls.find({}, (err, data) => {
//     if (err) {
//         console.log("Database error")
//     } else {
//         console.log(data)
//     }
// })



app.listen(4000)
console.log("Server started at 4000")