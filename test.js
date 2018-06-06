// var dbTest = require('./models/test')
// var mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/testSchema', err => {

//     if (err) {
//         console.log(err)
//     } else {
//         console.log('Connected to database')
//     }
// })

// // new dbTest({
// //     name: "RDSYGHKJ",
// //     age: [{
// //         name: "KUMAR",
// //         id: 5
// //     }]
// // }).save((err, data) => {
// //     console.log(data)
// // })

// dbTest.updateMany({}, { $pull: { age: { 'id': 21 } } }, (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         dbTest.find({}, (err, d) => {
//             console.log(JSON.stringify(d))
//         })
//     }
// })
// ------------------
// Create a campaign\
// ------------------

// Include the SendinBlue library\
// var SibApiV3Sdk = require('sib-api-v3-sdk');
// var defaultClient = SibApiV3Sdk.ApiClient.instance;

// // Instantiate the client\
// var apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = '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';

// var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
// var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();

// // Define the campaign settings\
// emailCampaigns = {
//     name: 'Campaign sent via the API',
//     subject: 'My subject',
//     sender: { name: 'From name', email: 'rajatky3107@gmail.com' },
//     type: 'classic',

//     // Content that will be sent\
//     htmlContent: 'Congratulations! You successfully sent this example campaign via the SendinBlue API.',

//     // Select the recipients\
//     recipients: { listIds: ["rajatky07@gmail.com"] }

//     // Schedule the sending in one hour\
//     // scheduledAt: '2018-01-01 00:00:01'
// }

// // Make the call to the client\
// apiInstance.createEmailCampaign(emailCampaigns).then(function(data) {
//     console.log('API called successfully. Returned data: ' + data);
// }, function(error) {
//     console.error(error);
// });

var request = require("request");

var options = { method: 'GET', url: 'https://api.sendinblue.com/v3/account' };

request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});