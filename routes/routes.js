var express = require('express')
var app = express.Router();
var tokenVerify = require('./tokenVerify')

var showPerson = require('./showPerson')
app.get('/show', tokenVerify.tokenVerify, showPerson.show)

var addPerson = require('./addPerson')
app.post('/add', tokenVerify.tokenVerify, addPerson.addPerson)

var registrationLogin = require('./registrationLogin')
app.post('/register', registrationLogin.registration)
app.post('/login', registrationLogin.login)


module.exports = app;