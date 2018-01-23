var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var mongoose = require('mongoose')
var dbLogin = require('./models/login')
var dbPerson = require('./models/person')
var jwt = require('jsonwebtoken')

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

// var abc = (req, res, next) => {
//     if (!req.body.password) {
//         req.body.password = '123';
//         next()
//     } else {
//         next()
//     }
// }
// app.post('/signUp', abc, (req, res) => {
//     if (!req.body.email || !req.body.password) {
//         res.json({
//             success: false,
//             msg: "Enter all details"
//         })
//     } else {
//         var newLogin = new dbLogin({
//             email: req.body.email,
//             password: req.body.password
//         })
//         newLogin.save((err, data) => {
//             res.json({
//                 success: true,
//                 msg: "New User created",
//                 data: data
//             })
//         })
//     }
// })

app.post('/register', (req, res) => {
    if (!req.body.name || !req.body.age || !req.body.email || !req.body.gender) {
        res.json({
            success: false,
            msg: "Enter all the details"
        })
    } else {
        var newPerson = new dbPerson({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            phone: req.body.phone
        })
        newPerson.save((err, data) => {
            res.json({
                success: true,
                msg: "New person registered",
                data: data
            })
        })
    }
})

app.post('/login', (req, res) => {
    var obj = {
        name: "Ankit",
        age: 98
    }
    jwt.verify(req.body.token, 'D3V3L0PM3NT', (err, decoded) => {
            req.decoded = decoded
            next();
        })
        // var token = jwt.sign(obj, 'D3V3L0PM3NT')

})



app.listen(4000, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server started at port 4000")
    }
});