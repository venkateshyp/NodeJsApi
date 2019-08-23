const deleteId = mysqlSequelize.import("../../../schemas/tf_tktnumber")

module.exports = function(id){
    
    return( async()=>{
        try{
            let data = await deleteId.destroy({
                where:{
                    id:id.id
                }
            })
            console.log("data", data);
            
            return data;
        }catch(e){
            throw e
            console.log("e.......................",e);
            
        }
    })()
}