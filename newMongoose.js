// var express = require('express');
var bodyParser = require('body-parser')
    // var app = express();
var mongoose = require('mongoose');
var cls = require('./models/class')
mongoose.connect('mongodb://localhost/class', err => {
    if (err) {
        console.log("Database not connected")
    } else {
        console.log('Database connected')
    }
})
var flag = 0;
var add = async() => {
    await new cls({
        name: "Radsjsdfat",
        email: "rajsdsfat@outlook.com",
        password: "jahgcfxz123"
    }).save(() => {
        flag = 1;
        console.log('done');
    })
}
add()
var abc = async() => {
    var users = await cls.find({}, { age: 1, dob: 0 }).catch(err => {
        console.log(err)
    })
    console.log(users)
}

abc()