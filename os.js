var mongoose = require('mongoose')
var dbPerson = require('./models/person')
var dbDetails = require('./models/personfile')

mongoose.connect('mongodb://localhost/test', err => {

    if (err) {
        console.log(err)
    } else {
        console.log('Connected to database')
    }
})

// new dbPerson({
//     age: 22,
//     name: 'abc',
//     email: 'abc@abc.com',
//     address: {
//         line1: 'svhssdf',
//         line2: 'fdghsh',
//         city: 'fdghsh',
//         state: 'fdghsh',
//         pincode: 122018
//     },
//     phone: ['7894561230', '5869656646']
// }).save((err, data) => {
//     if (err) {
//         console.log("Error", err)
//     } else {
//         new dbDetails({
//             email: data.email,
//             person: data._id,
//             occupation: "Student"
//         }).save((err, newData) => {
//             if (err) {
//                 console.log('errrr')
//             } else {
//                 console.log('done')
//             }
//         })
//     }
// })

dbDetails.find({}).populate('person').exec((err, data) => {
    if (err) {
        console.log('err', err)
    } else {
        console.log(data)
    }
})

// dbPerson.findOneAndUpdate({ name: 'abc' }, { $set: { age: 25 } }, (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Data updated", data)
//     }
// })