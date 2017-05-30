'use strict';


var receipt = {
 "1":{
  "phone": 0971763077,
  "mahang": "001",
  "tenhang": "sua",
 },
  "2": {
  "phone": 0971763088,
  "mahang": "002",
  "tenhang": "banh",
 },
  "3": {
  "phone": 0971763099,
  "mahang": "003",
  "tenhang": "keo"
 },
  "4": {
  "phone": 0971763088,
  "mahang": "004",
  "tenhang": "cafe"
 }
}




const checkPhone = function(phone){
	var temp= {};
	for(var i in receipt){
		for(var j in receipt[i]){
			if(receipt[i][j] == phone){
				
				console.log(receipt[i]);
				temp[i] = receipt[i];
			}
			
		}
		
		
	}
	
	return temp;
}



module.exports = {
	checkPhone: checkPhone,
	receipt:receipt
}