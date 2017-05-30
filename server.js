var express = require('express');
var app = express();
var test = require('./controller/receipt');



app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

//show all
app.get('/reicipt', function(req,res){
	res.send(test.receipt);
})


//check phone
app.get('/reicipt/:phone', function(req,res){
	let numberPhone = req.params.phone;
	let result = test.checkPhone(numberPhone);
	res.send(result);
})


//listen
var port = process.env.PORT || 4000
app.listen(port);
console.log('Listening on localhost:'+ port);