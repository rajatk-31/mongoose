var jwt = require('jsonwebtoken')

exports.tokenVerify = (req, res, next) => {
    if (!req.headers['x-access-token']) {
        res.json({
            success: false,
            msg: "No token provided"
        })
    } else {
        jwt.verify(req.headers['x-access-token'], req.app.get('secret'), (err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Authentication error"
                })
            } else {
                req.decoded = data
                next();
            }
        })
    }
}