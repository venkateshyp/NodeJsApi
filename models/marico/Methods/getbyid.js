const maricoTktnumber = mysqlSequelize.import("../../../schemas/marico_tktNumber")

module.exports = async(id)=>{
      
    return(async()=>{
        try{          
            if(id.userid){

                let result = await maricoTktnumber.findAll({
                    where:{
                        userid:id.userid
                    }
                })
                return result;

            }else{

                let result = await maricoTktnumber.findAll({
                    where:{
                        tktnumber:id.tktnumber
                    }
                })
    
                return result;
            }
            
            
            
            

        }catch(e){
            console.log("marico tkt number create.........", e); 
            throw e
           
        }
    })()
}