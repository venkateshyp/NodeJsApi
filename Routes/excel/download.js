const fs= require('fs');
const path=require('path');


module.exports = async(req, res)=>{
    let response = {
        success:false,
        data:'',
        message: undefined
    }    
     const file = path.join(appPath+'/'+req.query.download);
    try{
        response.success = true;
        res.download(file);
    }catch(e){
        throw e
    }    
}

// OR
{/*
const fs= require('fs');
const path=require('path');

module.exports= (req, res)=>
{    
    try {
        var filepath=path.join(appPath +"/Data.xlsx")
        console.log(filepath)
        if(!(filepath))
        {
            res.send("File not Found",filepath)
        }
        else
        {
            res.download(filepath)  
        }
    } catch (e) {
        console.log(e);
        throw e; 
    } 
} */}

