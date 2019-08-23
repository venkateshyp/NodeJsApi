const TktNumber = require(appPath + '/models/tktnumber')

module.exports = async (req,res)=>{
    //let response = Object.assign({}, BasicResponse);
    let response = {
        success:false,
        data:'',
        message:undefined
    }
    let tktnumber = new TktNumber()
 
    let result = await tktnumber.get()
    .catch((err)=>{
        response.message = err;
        res.status(403).json(response)
    })
    response.success = true
    response.data = result
    res.status(200).json(response)
}