const tktNumbercreate = require(appPath + '/models/tktnumber')

module.exports = async(req, res)=>{
    let response = {
        success:false,
        message:undefined,
        data:''
    }

    let tktNumbercreat = new tktNumbercreate()
    let result = await tktNumbercreat.create(req.body)
    .catch((e)=>{
        response.message = e
        res.status(403).json(response)
    })
      
    response.success = true
    response.data = req.body
    res.status(200).json(response)

}