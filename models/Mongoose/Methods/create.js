
const userSchema = require('../../../schemas/Mongoose/userData').userSchemaModel


module.exports = function(userId) {
  return (async () => {
    try {
        
      let data = await userSchema.create(
        {
              ...userId,
              date:new Date()
        }
      )

      return data;
    } catch (e) {
      throw e
    }
  })()
}


 