const maricoTktnumber = mysqlSequelize.import("../../../schemas/marico_tktNumber")


module.exports = async(createtktNumber)=>{
    return(async()=>{
        try{
            let tktData = await mysqlSequelize.query(" SELECT * FROM sys.marico_tktnumber order by id desc limit 1", { type: mysqlSequelize.QueryTypes.SELECT})
            
            let tktformat;
            
            if(tktData.length==0){
                tktformat = 'TKT000' + 1;
            }else{
                let id = tktData[0].id +1 ;
                 tktformat = 'TKT000' + id;
            }

            let data = {
                tktnumber: tktformat,
                tktmessage : createtktNumber.tktmessage,
                userid: createtktNumber.userid,
                status: "In Progress",
                startdate: new Date()
            }
           
            let result = await maricoTktnumber.create(data)

            return result;
            
            
            

        }catch(e){
            console.log("marico tkt number create.........", e); 
            throw e
           
        }
    })()
}