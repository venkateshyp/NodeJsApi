const sendmail = require(appPath + '/models/Mails');

module.exports = async (req, res)=>{
    let response = {
        success: false,
        message: undefined,
        data:''
    }

    let SendMail = new sendmail();
    
    try {
        let result = await SendMail.sendmail()
        response.success = true;
        response.data = result;
        res.status(200).json(response)

    } catch (e) {
        response.message = e;
        res.status(403).json(response)
    }

}