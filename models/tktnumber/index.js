 const fs = require('fs')

 class TktNumber{
     constructor(){
         
     }
 }

 fs.readdirSync(__dirname+"/Methods/").forEach(function(file){
    if(file != 'index.js'){
        let filename = file.replace('.js','')              
        TktNumber.prototype[filename] = require(__dirname+"/Methods/"+filename)
    }
 })

 module.exports = TktNumber