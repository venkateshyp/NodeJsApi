const tktNumber = mysqlSequelize.import('../../../schemas/tf_tktnumber')

module.exports = async()=>{
    return(async()=>{
        try{
            let data = await tktNumber.findAll()                       
            return data;
        }catch(e){
            console.log(e);
            throw e
        }
    })()
}