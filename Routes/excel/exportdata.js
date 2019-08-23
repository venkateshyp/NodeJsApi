const excel = require(appPath + '/models/excel')

module.exports = async (req,res)=>{
   
    let response = {
        success:false,
        data:'',
        message:undefined
    }
    let Excel = new excel()
 
    let result = await Excel.exportjsondata(req.body)
    .catch((err)=>{
        response.message = err;
        res.status(403).json(response)
    })
    response.success = true
    response.data = result
    res.status(200).json(response)
}