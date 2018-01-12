var mongoose = require('mongoose')
var dbProduct = require('./models/product')
var express = require('express')
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/product', err => {
    if (err) {
        console.log(err)
    } else {
        console.log('Connected to database')
    }
})



app.post('/addProduct', (req, res) => {
    console.log(req.body)
    if (!req.body.name || !req.body.price || !req.body.description) {
        res.json({
            success: false,
            msg: "All data not received"
        })
    } else {
        var newProduct = new dbProduct({
            name: "Pen",
            price: 10,
            description: "ABDGTTI"
        })

        newProduct.save((err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Database error"
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



// var newProduct = new dbProduct({
//     name: "Pen",
//     price: 10,
//     description: "ABDGTTI"
// })

// newProduct.save((err, data) => {
//     if (err) {
//         console.log("Something went wrong")
//     } else {
//         console.log("Data saved")
//         console.log(data)
//     }
// })

// dbProduct.find({ name: "Pen" }, (err, data) => {
//     if (err) {
//         console.log("err")
//     } else {
//         console.log(data)
//     }
// })


app.listen(3000, err => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server stared on port 3000")
    }
})