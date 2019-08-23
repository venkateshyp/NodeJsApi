const deleteTktNumber = require(appPath + "/models/tktnumber");

module.exports = async(req, res)=>{

    let response = {
        success:false,
        data:'',
        message: undefined
    }

    let deletetktNumber = new deleteTktNumber()
    let result = await deletetktNumber.deleted(req.body)
    .catch((e)=>{
        response.message = e
        res.status(403).json(response)
    })
    response.success = true
    response.data = req.body
    res.status(200).json(response)

}