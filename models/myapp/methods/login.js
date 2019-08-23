 
const registerSchemaModel = require("../../../schemas/Mongoose/registerschema").registerSchemaModel;

module.exports = async (data)=>{
        try {
            let result = await registerSchemaModel.findOne({
                        username: data.username                
            })      
            return result;
        } catch (error) {
            log.error(error)
            throw error;
        }
}
