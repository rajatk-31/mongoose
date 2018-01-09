var dbPerson = require('../models/person')

exports.addPerson = (req, res) => {
    if (!req.body.name || !req.body.age || !req.body.address) {
        res.json({
            success: false,
            msg: "All details not provided"
        })
    } else {
        var person = new dbPerson({
            name: req.body.name,
            age: req.body.age,
            address: req.body.address
        })
        person.save((err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Error in database"
                })
            } else {
                res.json({
                    success: true,
                    msg: "Your data is saved"
                })
            }
        })
    }
}