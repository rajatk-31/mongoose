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
var abc = async() => {
    await add();
    if (flag == 0) {
        console.log('0')
    } else {
        console.log('1')
    }
}

abc()