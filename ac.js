var express = require('express')
var app = express();
var cluster = require('cluster')

if (cluster.isMaster) {
    console.log('Master')
    cluster.fork();
    cluster.fork();

} else {
    console.log('worker')


    function doWork(duration) {
        const start = Date.now()
        while (Date.now() - start < duration) {

        }
    }

    app.get('/', (req, res) => {
        doWork(8000)
        res.send('here')
    })
    app.get('/fast', (req, res) => {
        res.send('wohoo')
    })
    app.listen(3000)
}

// function doWork(duration) {
//     const start = Date.now()
//     while (Date.now() - start < duration) {

//     }
// }

// app.get('/', (req, res) => {
//     doWork(8000)
//     res.send('here')
// })
// app.get('/fast', (req, res) => {
//     res.send('wohoo')
// })

// app.listen(3000)