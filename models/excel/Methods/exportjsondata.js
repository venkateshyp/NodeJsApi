const fs = require('fs');
const json2xls = require('json2xls');
const jsonexport = require('jsonexport');
const abcd = require(appPath+'/Utilities/Chatbot.xlsx')

module.exports = async(data)=>{
    return(async()=>{

        
        try {
        var parsedData = []
        var jsonData = [
        {
            "userId": "1",
            "data": [
                {
                    "survey": {
                        "name": "prasad",
                        "qual": "mbbba",
                        "data": 1
                    }
                },
                {
                    "surveyValue": {
                        "name": "venki",
                        "qual": "mbbba",
                        "data": 3,
                        "data2": 4
                    }
                }
            ]
        },
        {
            "userId": "2",
            "data": [
                {
                    "survey": {
                        "name": "njsdfj",
                        "qual": "mbbba",
                        "data": 2,   
                        "data2": 4
                    }
                },
                {
                    "surveyValue": {
                        "name": "ram",
                        "qual": "mbbba",
                        "data": 3,
                        "data2": 4
                    }
                }
                
            ]
        },
        {
            "userId": "3",
            "data": [
                {
                    "survey": {
                        "name": "njsdfj",
                        "qual": "mbbba",
                        "data": 3,
                        "date": "2019-05-30T10:50:45.584Z"
                    }
                }
            ]
        }
    
    ]


         var a =  jsonData.map(obj => {
            obj.data.forEach(element => {
                if(element.survey){
                   let surveyData = element.survey   
                   Object.assign(surveyData, {'userId': obj.userId})     
                    parsedData.push(surveyData)            
                }else{
                   let surveyValueyData = element.surveyValue
                   Object.assign(surveyValueyData, {'userId': obj.userId});
                   parsedData.push(surveyValueyData)
                    
                }                
            });
        })

        var xls = json2xls(parsedData);
        var result = await fs.writeFileSync( "./Data.xlsx", xls,'binary', (err)=>{
                if(err) return console.log(err);
        });

        return result;


        // jsonexport(parsedData,function(err, csv){
        //     if(err) return console.log(err);
            
        // });
    
                    
    //     var xls = json2xls(json);

    //    //await 
    //     await fs.writeFileSync( xls, 'binary', function(err, './Data.xlsx'){
    //             if(err) return console.log(err);
    //     });


        } catch(e){
            console.log("e............................", e);
            
            throw e
        }
    })()
}



