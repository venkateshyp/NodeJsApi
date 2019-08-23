const fs = require('fs');

class SendMail {
    constructor(){

    }
}

fs.readdirSync(__dirname+'/Method/').forEach(function(file){
    if(file!= 'index.js'){
        let filename = file.replace('.js', '')
        SendMail.prototype[filename] = require(__dirname+"/Method/"+filename)
    }
})

module.exports = SendMail