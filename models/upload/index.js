const fs = require('fs')

class FileUpload {
    constructor(){

    }
}

fs.readdirSync(__dirname+"/Methods/").forEach(function(file){
    if(file!="index.js"){
        let filename = file.replace('.js','')
        FileUpload.prototype[filename]=require(__dirname+"/Methods/"+filename)
    }
})

module.exports = FileUpload;