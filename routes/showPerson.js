var dbPerson = require('../models/person')

exports.show = (req, res) => {
    dbPerson.find({}, (err, data) => {
        if (err) {
            res.json({
                success: false,
                msg: "Database error"
            })
        } else {
            res.json({
                success: true,
                msg: "All data",
                data: data
            })
        }
    })
}