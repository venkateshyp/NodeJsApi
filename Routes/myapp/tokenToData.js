const jwtDecode = require("jwt-decode")

module.exports = async(req,res)=>{
    let response = {
        success: false,
        message: undefined,
        data: "",
    }
    var accesstoken = req.query.accesstoken;
    try {
        var decode = jwtDecode(accesstoken)
        if(decode){
            response.success = true
            response.data = decode
            res.status(200).json(response)
        }else {
            response.data = result
            res.status(403).json(response)
        }
    } catch (e) {
        console.log(e)
        response.message = e
        res.status(403).json(response)
    }
      
}