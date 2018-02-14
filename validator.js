var validator = require('node-validator')
    /**
     * Name should be a string of minimum length 3
     * email should be a string and valid containing @ and .
     * Password should contain atleast 2 uppercase, 3 lowercase, 2 number and one special character and must be 8 characters long
     * Phone number should start from 6,7,8 or 9 and should be 10 characters long
     */
var validateData = validator.isObject()
    .withRequired('name', validator.isString({ regex: /^[A-Za-z]{3,}$/ }))
    .withRequired('email', validator.isString({ regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }))
    .withRequired('password', validator.isString({ regex: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/ }))
    .withRequired('phone', validator.isNumber({ regex: /^[6789][0-9]{9}$/ }))

var abc = {
    name: "Rajat",
    email: "rajat.yadav@zenways.io",
    phone: 8003650500,
    password: 'plmnko09876'
}

validator.run(validateData, abc, (ec, err) => {
    console.log(ec)
    console.log('-=-=-=-=-=-=-=-')
    console.log(err)
})