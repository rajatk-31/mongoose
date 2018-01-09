var dbLogin = require('../models/login')
var jwt = require('jsonwebtoken')


exports.registration = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "All details not provided"
        })
    } else {
        var newPerson = new dbLogin({
            email: req.body.email,
            password: req.body.password
        })
        newPerson.save((err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Error in database"
                })
            } else {
                res.json({
                    success: true,
                    msg: "Data saved"
                })
            }
        })
    }
}

exports.login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "All details not provided"
        })
    } else {
        dbLogin.findOne({ email: req.body.email }, (err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Error in database"
                })
            } else if (!data || data == null) {
                res.json({
                    success: false,
                    msg: "User not found"
                })
            } else if (req.body.password != data.password) {
                res.json({
                    success: false,
                    msg: "Password mismatch"
                })
            } else {
                var tokenData = {
                    email: data.email
                }
                var token = jwt.sign(tokenData, req.app.get('secret'))
                res.json({
                    success: true,
                    msg: "Registration successfull",
                    token: token
                })
            }
        })
    }
}