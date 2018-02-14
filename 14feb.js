var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/class', (err, data) => {
    if (err) {
        console.log(err)
        console.log("Error in database connection")
    } else {
        console.log("Database connected")
    }
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var dbCity = require('./models/city')

app.post('/addCity', (req, res) => {
    if (!req.body.name || !req.body.state) {
        res.json({
            success: false,
            msg: "All details not entered"
        })
    } else {
        var newSchools = {
            name: "djkgsh",
            phoneNo: 5656565695,
            address: {
                line1: "dsjgj",
                line2: "dklhkhd",
                pincode: 564665
            }
        }
        var newCity = new dbCity({
            name: req.body.name,
            state: req.body.state,
            details: {
                mla: req.body.mla
            },
            'details.minister': req.body.minister,
            schools: [newSchools]
        })
        newCity.save((err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Database error"
                })
            } else {
                res.json({
                    success: true,
                    msg: "Data saved",
                    data: data
                })
            }
        })
    }
})


app.get('/getCity', (req, res) => {
    dbCity.find({}, (err, data) => {
        if (err) {
            res.json({
                success: true
            })
        } else {

            res.json({
                success: true,
                msg: "Data found",
                data: data
            })
        }
    })
})

app.listen(4000, () => {
    console.log("Server started at port 4000")
})