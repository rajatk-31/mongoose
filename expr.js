var express = require('express')
var bodyParser = require('body-parser')
var app = express()
    // var mongoose = require('mongoose')
    // var dbPerson = require('./models/person')
    // var config = require('./config.json')
    // var person = require('./routes/routes')

// mongoose.connect('mongodb://localhost/abc', err => {
//     if (!err) {
//         console.log("Connected to database")
//     }
// })
// app.set('secret', config.secret)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
    // app.use('/person', person)

app.get('/aa', (req, res) => {
    res.send('dghghs')
    setTimeout(() => { res.send('dghfssfghs'), res.end() }, 5000)

    // res.end()
})


app.listen(3000);
console.log("Server started at 3000")