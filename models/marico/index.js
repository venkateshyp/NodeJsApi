const fs = require('fs')

class MaricoTktNumber {
    constructor(){

    }
}
fs.readdirSync(__dirname+"/Methods/").forEach(function(file){
    if(file != 'index.js'){
        let filename = file.replace('.js','')
        MaricoTktNumber.prototype[filename]=require(__dirname+"/Methods/"+filename)
    }
})

module.exports = MaricoTktNumber