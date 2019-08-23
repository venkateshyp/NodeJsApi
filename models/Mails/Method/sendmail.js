
// Load the SDK for JavaScript
var AWS = require('aws-sdk');

// Set the region 
AWS.config.update({
    "accessKeyId": "AKIAJNSIJIJWIO64AFXA",
    "secretAccessKey": "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",
    "region": "us-east-1"
});

module.exports = async()=>{
    try {
        var params = {
            Destination:{
                CcAddresses:[
                    'ypvr429@gmail.com'
                ],
                ToAddresses:[
                    'yp.venkateswarlu@gmail.com'
                ]
            },
            Source: 'vyalagala@techforce.ai', /* required */
            Message:{
                Body:{
                    Html:{
                        Charset:'UTF8',
                        Data: 'Hi Welcome 12345'
                    },
                    Text:{
                        Charset: 'UTF8',
                        Data: "TEXT-FORMAT-BODY"
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'Check mail'
                }
            }
        }

        // Create the promise and SES service object
        var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

        // Handle promise's fulfilled/rejected states
        sendPromise.then(
        function(data) {
            console.log(data.MessageId);
        }).catch(
            function(err) {
            console.error(err, err.stack);
        });
        
    } catch (e) {
        console.log(e);
        throw e 
    }
}