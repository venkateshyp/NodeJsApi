const fs = require('fs')

class Excel {
    constructor(){

    }
}
fs.readdirSync(__dirname+"/Methods/").forEach(function(file){
    if(file != 'index.js'){        
        let filename = file.replace('.js','')
        Excel.prototype[filename]=require(__dirname+"/Methods/"+filename)
    }
})

module.exports = Excel;