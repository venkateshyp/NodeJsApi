const marico = require(appPath+"/models/marico")

module.exports = async(req, res)=>{
    let response = {
        success:false,
        message:undefined,
        data:''
    }

    let Marico = new marico();
    try{
        let result = await Marico.getbyintent(req.query)
        response.success = true
        response.data = result
        res.status(200).json(response) 

    }catch(e){
        response.message = e
        res.status(403).json(response)
    }
    
}
