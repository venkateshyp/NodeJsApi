
const userSchema = require('../../../schemas/Mongoose/userData').userSchemaModel


module.exports = function(id) {
  return (async () => {
    try {      
       
      let data = await userSchema.deleteOne({
            userName: id.id
      }) 
      return data;
    } catch (e) {
      throw e
    }
  })()
}


 