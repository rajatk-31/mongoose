var express = require('express')
var app = express();
var fs = require('fs')
var bodyParser = require('body-parser')
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
var email = require('emailjs');

var mailSender = email.server.connect({
    user: "testuserdmt@gmail.com",
    password: "Testuserdmt_1234",
    host: "smtp.gmail.com",
    ssl: true
});
var multer = require('multer')
var upload = multer({ dest: 'rajat/' })
var cpUpload = upload.fields([{ name: 'avatar', maxCount: 2 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function(req, res, next) {
    // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files 
    res.json({
            success: true,
            msg: "Photos uploaded",
            name: req.files['avatar'].length,
            gname: req.files['gallery'].length
        })
        // e.g. 
        //  req.files['avatar'][0] -> File 
        //  req.files['gallery'] -> Array 
        // 
        // req.body will contain the text fields, if there were any 
})

app.listen(3000, () => {
    console.log("3000")
})