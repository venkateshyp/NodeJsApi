const maricoTktnumber = mysqlSequelize.import("../../../schemas/marico_problem_solutions")

module.exports = async(id)=>{
    return(async()=>{
        try{
            console.log("id........", id);

                let result = await maricoTktnumber.findOne({
                    where:{
                        intent:id.intent
                    }
                })
                return result;   
            
        }catch(e){
            console.log("marico tkt number create.........", e); 
            throw e
           
        }
    })()
}