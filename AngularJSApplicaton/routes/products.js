var fs = require('fs');


exports.productList = function(req,res){
	console.log("Inside product list");
	fs.readFile('data/products.json', 'utf8', function (err,data) {
	  if (err) {
		return console.log(err);
	  }
	//  console.log(data);
	  res.send(data);
	});
};


exports.productDetails = function(req,res){
	console.log("inside product details =" + req.param('productId'));
	var filePath = 'data/' + req.param('productId')+ '.json';
	console.log("File path = " +  filePath);
	fs.readFile(filePath,'utf8',function(err,data){
		console.log("Data =" + data);
		if(err){
			return console.log(err);
		}
		res.send(data);
	});
}


