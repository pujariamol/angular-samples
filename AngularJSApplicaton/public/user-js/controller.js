var productCatControllers = angular.module("productCatControllers",[]);

productCatControllers.controller("productListCtrl", ["$scope","$http",function($scope,$http) {
	
	$http.get('/products/list').success(function(data){
		//console.log(data);
		$scope.products = data;
	}).error(function(data){
		alert("Error while loading products.json file");
		console.log(data);
	});
	
	$scope.orderProp = "age";
	
}]);

productCatControllers.controller("productDetailsCtrl",["$scope","$routeParams","$http",function($scope,$routeParams,$http){
	$http.get('/products/' + $routeParams.productId).success(function(data){
		console.log(data);
		$scope.product = data;
		$scope.mainImageUrl = data.images[0];
	}).error(function(data){
		alert("Error while loading products.json file");
		console.log(data);
	});

	$scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
}])