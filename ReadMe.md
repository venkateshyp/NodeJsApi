Delete Api:- 
============
    http://localhost:5001/v1/tktNumber/

Body :-   {
  			
           "id":1
  }


Marico TktNumber:-
====================
create:-http://localhost:5001/v1/marico/

{
	"tktmessage": "sql server install error",
	"userid":"UID001",
	"status":"done"
}

getbyUserid:- http://localhost:5001/v1/marico?userid=UID001

getbyTktNuber:- http://localhost:5001/v1/marico?tktnumber=TKT0002


Excel Api:-
===========

export json:-
POST: http://localhost:5001/v1/excel/jsonexport

SendMail:-
=============
sendmail:-

POST:-http://localhost:5001/v1/sendmail



Download Api:-
=================

Get :- http://localhost:5001/v1/excel/download

              OR

      http://localhost:5001/v1/excel/download/?download=Data.xlsx


MongoDB URls:-
================

POST:-  http://localhost:5001/v1/mongoose/
Body: {
	"userName":"venkatesh",
	"password":"venkatesh@123"
	
}

GET:-  http://localhost:5001/v1/mongoose/allusers

MyApp:-
======================

Post:-  http://localhost:5001/v1/myapp/signup
Body: {
	  "username":   "venkatesh",
    "mailid":     "ab@yopmail.com",
    "password":   "12345",
    "repassword": "pass@123",
    "phonenumber": "9493515971"
}

GET:- http://localhost:5000/v1/myapp/login?username=venkatesh



Access Token to Data:-
------------------------

GET:- http://localhost:5000/v1/myapp/tokentodata?accesstoken=token









