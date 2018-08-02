const express = require('express');
var bodyParser = require('body-parser')
var app = express()
var mongoose = require('mongoose')
var dbClass = require('./models/class')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/class', err => {
    if (err) {
        console.log(err)
    } else {
        console.log('Connected to database')
    }
})

// var re = new RegExp(req.body.name, 'i')
// var page = req.params.page;
// var ipp = req.body.itemsPerPage;
// var skip = page > 1 ? ((page - 1) * ipp) : 0;
// dbLead.find({ companyName: req.decoded.companyName.toLowerCase(), status: { $gte: 0 }, name: new RegExp(re) }).skip(skip).limit(ipp).exec((err, leadData) => {

var email = new RegExp("RaJat@outlook.com", 'i')

dbClass.find({ email: new RegExp(email) }, (err, data) => {
    console.log(err, '------------', data)
})