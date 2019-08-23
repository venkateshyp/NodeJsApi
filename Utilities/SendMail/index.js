const sgMail = require('')
sgMail.setApiKey('');

module.exports =async  function(toMail, fromMail, subject, body){
try{
  let message = {
   to: toMail,
   from: fromMail,
   html: body,
   subject: subject
  }
  let res = await sgMail.send(message)
  return res
}catch(err){
  console.log("Error while sending mail");
  throw err;
}
}
