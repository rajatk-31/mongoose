var express = require('express')
var app = express.Router();

var showPerson = require('./showPerson')
app.get('/show', showPerson.show)

var addPerson = require('./addPerson')
app.post('/add', addPerson.addPerson)


module.exports = app;