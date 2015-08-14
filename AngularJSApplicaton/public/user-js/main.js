var app = angular.module("juniorAmazon",["ngRoute","productCatControllers"]);

// Using the app.config() method, we request the $routeProvider to be injected into our config function and use the $routeProvider.when() method to define our routes. 
app.config(["$routeProvider",function($routeProvider){
	$routeProvider.
	when("/products",{
		templateUrl: 'partials/product-list.html',
		controller: "productListCtrl"
	}).
	when("/products/:productId", {
		templateUrl:'partials/product-detail.html',
		controller: "productDetailsCtrl"
	}).
	otherwise({
		redirectTo:'/products'
	});
}]);

