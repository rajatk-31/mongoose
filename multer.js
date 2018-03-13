var express = require('express')
var app = express();
var fs = require('fs')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var email = require('emailjs');

var mailSender = email.server.connect({
    user: "testuserdmt@gmail.com",
    password: "Testuserdmt_1234",
    host: "smtp.gmail.com",
    ssl: true
});
var multer = require('multer')
    // var upload = multer()
    // var storage = multer.diskStorage({
    //     destination: function(req, file, cb) {
    //         cb(null, '/rajat/')
    //     },
    //     filename: function(req, file, cb) {
    //         cb(null, file.originalname)
    //     }
    // })
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './rajat')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})


var upload = multer({ storage: storage })

app.post('/abc', upload.any(), (req, res) => {
    var reqFile = req.files[0] || null;
    if (reqFile) {

        res.json({
            success: true,
            file: reqFile.originalname
        })
    } else {
        res.json({
            success: false
        })
    }
})

// app.get('/download', function(req, res){
//     var file = __dirname + '/rajat/481c0cd5122647dc70d513d9c6b9fe37';
//     res.writeHead(200, {
//         'Content-Type': 'image/jpeg',
//     });
//     fs.createReadStream(file).pipe(res);

//     // res.sendFile(file); // Set disposition and send it.
//   });
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/rajat')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
//   })

//   var upload = multer({ storage: storage })

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, '/rajat')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//   }
// })

// var upload = multer({ storage: storage })


// app.post('/abc', upload.single('image'), function (req, res, next) {
//     console.log("Front-end is calling");
//     res.json({status: 'success', data: 'Fichier chargé.\nOrgane sélectionné : ' + req.body.organ});
// });
// var dirname = __dirname + '/rajat/abc.jpg';
// var message = {
//     text: "",
//     from: "LMS <testuserdmt@gmail.com>",
//     to: 'rajat.yadav@zenways.io',
//     subject: "LMS login details",
//     attachment: [{
//         data: "<html>Hi ,<br>Your login credentials for lms software are: <br>Phone: <strong> </strong><br>Password:<strong> <br><br></html>",
//         alternative: true
//     }, { path: dirname, type: "image/jpg", headers: { "Content-ID": "<my-image>" } }]
// };
// console.log('here')
// mailSender.send(message, function(err, data) {
//     if (err) {
//         console.log('err', err)
//     } else {
//         console.log('sent')
//     }
// })

app.listen(3000, () => {
    console.log("3000")
})