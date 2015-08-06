var app = angular.module("juniorAmazon",[]);

app.controller("AppControllers", function($scope) {
	$scope.products = [
	                   {
	                	   "name":"The Immortals of Meluha",
	                	   "category" : "Books",
	                	   "price" : "$14.50s"
	                   },
	                   {
	                	   "name":"The Secret of the Nagas",
	                	   "category" : "Books",
	                	   "price" : "$19.50s"
	                   },
	                   {
	                	   "name":"The Oath of the vayuputras",
	                	   "category" : "Books",
	                	   "price" : "$12.50s"
	                   }
	                   ];
});