var app = angular.module("juniorAmazon",[]);

app.controller("AppControllers", ["$scope","$http",function($scope,$http) {
	$scope.products = [
	                   {
						   "id" : 1,
	                	   "name":"The Immortals of Meluha",
	                	   "category" : "Books",
	                	   "price" : "$14.50",
						   "imgUrl" : "img/meluha.jpg",
						   "age" : 1
	                   },
	                   {
						   "id" : 2,
	                	   "name":"The Secret of the Nagas",
	                	   "category" : "Books",
						   "imgUrl" : "img/The_Secret_of_the_Nagas.jpg",
	                	   "price" : "$19.50",
						   "age" : 1
	                   },
	                   {
						   "id" : 3,
	                	   "name":"The Oath of the vayuputras",
	                	   "category" : "Books",
						   "imgUrl" : "img/The_Oath_of_the_Vayuputras.jpg",
	                	   "price" : "$12.50",
						   "age" : 3
	                   }
	                   ];
	
	
/*	
	$http.get('data/products.json').success(function(data){
		alert("inside http");
		console.log(data);
		$scope.products = data;
	}).error(function(data){
		alert(data);
		console.log(data);
	});
*/	
	$scope.orderProp = "age";
	
}]);