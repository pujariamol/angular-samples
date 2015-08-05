var sampleApp = angular.module('ngTextField', ['ngRoute']);

sampleApp.factory('dataFactory',['$http',function($http){
	var dataFactory = {};
	var baseURL ="http://localhost:8181/AngularJSProject/rest/test";
	
	dataFactory.getData = function(){

		console.log("inside Get Data function")
		
		var req = $http({
			method: 'get',
			url: baseURL,
			data: JSON.stringify({'name' : 'Amol', 'value': 'pujari'}),
			dataType: 'jsonp'
	      
		});
		
		req.success(function(response){
			alert("success callback");
			console.log("Success = " + response);
		});
		
		req.error(function(response){
			alert("error callback");
			console.log("error = " + response);
		});
	};
	
	return dataFactory;
}]);		




sampleApp.controller('ngTextFieldController',['$scope','dataFactory',function($scope,dataFactory){
	$scope.callRestServer = function(methodName){
		alert('test');		
		dataFactory.getData();		
				
/*		var responsePromise = $http.jsonp("http://localhost:8181/AngularJSProject/rest/"+methodName);
		responsePromise.success(function(data){
				alert("http response = " + data);
		});
		responsePromise.error(function(data){
			alert("Error = '" + data + "'");
		});
*/
	};
}]);
		
		
	
		
sampleApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/login',{
		templateUrl: 'templates/login.html',
		controller:'LoginController'
	}).when('/signup',{
		templateUrl: 'templates/signUp.html',
		controller:'SignUpController'
	}).otherwise({
		redirectTo: '/'
	})
}])	;	
		

sampleApp.controller('SignUpController',['$scope','dataFactory',function($scope,dataFactory){
		
	$scope.signUp = function(){
		alert($scope.homeValue);
		alert("Thank you for signing up!!");
	}
	
}]);
		
sampleApp.controller('LoginController',['$scope','$location',function($scope,$location){
		
	$scope.login = function(){
		if($scope.username == "amol" && $scope.password == "123"){
			alert("Successfully logged in!!");
			
		}else{
			alert("Login failed!!");
			$location.path("/signup");
		}
	}
	
}]);
				
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
