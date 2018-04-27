const sendmail = require('sendmail')();

sendmail({
    from: 'rajatky07@gmail.com',
    to: 'rajat.yadav@zenways.io',
    subject: 'Hello World',
    html: 'Hooray NodeJS!!!'
}, function(err, reply) {
    console.log(err && err.stack)
    console.dir(reply)
})