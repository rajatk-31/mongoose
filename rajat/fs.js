// var fs = require('fs')

// fs.writeFile('abc.txt', 'Hello', (err, data) => {
//     if (err) {
//         console.log('SOmething went wrrong')
//     } else {
//         console.log("file created")
//     }
// // })
// var os = require('os')
// console.log('type : ' + os.type());



// // OS platform

// console.log('platform : ' + os.platform());



// // Total system memory

// console.log('total memory : ' + os.totalmem() / 1024 + " kbytes.");



// // Total free memory

// console.log('free memory : ' + os.freemem() / 1024 + " kbytes.");


// // Memory ratio

// console.log('Ratio' + os.totalmem() / 1024 / os.freemem() / 1024);


var fs = require("fs");
// console.log("Going to create directory /tmp/test");
fs.mkdir(__dirname + '/../idiota/', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("Directory created successfully!");
});

if (fs.existsSync(__dirname + '/idiot/')) {
    console.log("hurray")
} else {
    console.log("GO to hell")
}