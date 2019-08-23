const mangoose = require(appPath+"/models/Mongoose")

module.exports = async(req, res)=>{
    let response = {
        success:false,
        message:undefined,
        data:''
    }
    let Mangoose = new mangoose();
    try{
        let result = await Mangoose.delete(req.params)

        console.log("req.params",req.params);
        response.success = true
        response.data = result
        res.status(200).json(response) 

    }catch(e){
        response.message = e
        res.status(403).json(response)
        console.log(e);
        
    } 
}