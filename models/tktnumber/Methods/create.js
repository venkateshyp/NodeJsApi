const tktnumber = mysqlSequelize.import('../../../schemas/tf_tktnumber')

module.exports = async (tktNumberData) => {
  return (async () => {
    try {
         let tktData = await mysqlSequelize.query("SELECT * FROM sys.chatBot_Tktnumber order by id desc limit 1", { type: mysqlSequelize.QueryTypes.SELECT})
         let id = tktData[0].id +1 ;
         let tktformat = 'TKT000' + id;
         let numberData = {
             id: id,
             tkt_text : tktNumberData.tkt_text,
             tktnumber: tktformat,
             start_date: new Date()
        }
                
        let data = await tktnumber.create(numberData)

      return data
    } catch (e) {
      console.log("e............................",e);
      throw e
    }
  })()
}