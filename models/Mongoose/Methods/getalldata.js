
const userSchema = require('../../../schemas/Mongoose/userData').userSchemaModel


module.exports = function() {
  return (async () => {
    try {
        
      let data = await userSchema.find()

      return data;
    } catch (e) {
      throw e
    }
  })()
}


 