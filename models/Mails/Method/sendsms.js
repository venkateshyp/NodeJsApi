// Load the SDK for JavaScript
var AWS = require('aws-sdk');

// Set the region 
AWS.config.update({
    "accessKeyId": "AKIAJNSIJIJWIO64AFXA",
    "secretAccessKey": "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"
});


module.exports = () => {
    try {

        // var params = {
        //     Message: 'TEXT_MESSAGE', /* required */
        //     PhoneNumber: '+919493515971',
        //   };

        //   var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();  

        //   publishTextPromise.then(
        //     function(data) {
        //       console.log("MessageID is " + data.MessageId);
        //     }).catch(
        //       function(err) {
        //       console.error(err, err.stack);
        //     });

        var sns = new AWS.SNS();
        var params = {
            Message: "hi venki",
            MessageStructure: 'string',
            PhoneNumber: '9652096975',
            Subject: 'ok good'
        };

        sns.publish(params, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else console.log(data); // successful response
        });
    } catch (e) {
        console.log(e);
        throw e;
    }
}