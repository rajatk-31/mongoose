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
app.post('/home', cpUpload, function(req, res, next) {
    // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files 
    // console.log(req.files)
    // console.log(req.files.avatar)
    let data = fs.readFileSync(req.files.avatar[0].path, 'utf8');
    // console.log(data)
    var lines = data.split("\n");
    var result = [];
    var header = lines[0].split(",");
    var headers = header.map(ele => {
        // var name = ele.split(' ').join('_').toLowerCase()
        return ele
    })
    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentLine = lines[i].split(",");

        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentLine[j];
        }
        result.push(obj);
        if (i == lines.length - 1) {
            console.log('---------------', req.files.avatar[0].path)
            fs.unlink(req.files.avatar[0].path, err => {
                if (err) {
                    console.log('errrrrrrrrr')
                    res.json({
                        success: true,
                        msg: "Photos uploaded",
                        result: result
                    })
                } else {
                    res.json({
                        success: true,
                        msg: "Photos uploaded",
                        length: result.length,
                        result: result
                    })
                }
            })
        }
    }

    // e.g. 
    //  req.files['avatar'][0] -> File 
    //  req.files['gallery'] -> Array 
    // 
    // req.body will contain the text fields, if there were any 
})

app.listen(3000, () => {
    console.log("3000")
})