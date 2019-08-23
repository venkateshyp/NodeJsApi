const fs = require('fs')
module.exports = function(fileData){
    return(async()=> {

        try {
            let data =  appPath +"/LocalStorages/text.bpmn";

            fs.writeFile(data, fileData, (err) => {
                if (err) console.log(err);
                console.log("Successfully Written to File.");
              });


        }catch(e){
            console.log(e);
            throw e            
        }
    })()
}
