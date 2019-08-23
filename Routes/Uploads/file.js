const fileUpload = require(appPath+"/models/upload")

module.exports = async(req, res)=>{
    let response = {
        success:false,
        message: undefined,
        data: ''
    }

    let fileUploades = new fileUpload();
    
    let result = await fileUploades.file(req.body)
    .catch((e)=>{
        response.message=e
        res.status(403).json(response)
    })
   
    response.data = result;
    response.success = true;
    res.status(200).json(response)

}