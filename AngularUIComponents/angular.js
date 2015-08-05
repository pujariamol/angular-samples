var app = angular.module('myApp', []);
app.controller('myAppController', function($scope) {
    
	$scope.areas = {
		list:[
			"Floorplan",
			"Combinations",
			"Schedule",
			"Publish",
			"Demo"
		],
		current: "Floorplan"
	};
	
	$scope.apps = {
		list:[
			"Marketing",
			"Planning",
			"Reservation",
			"Settings"
		],
		current: "Marketing"
	};
	
	
	$scope.test = function(){
		alert("Test button clickeds");
	};
	
});


//custom directive to include text template
app.directive("myDirective",function(MultiTransclude){
	return {
		link : (scope, iElem, iAttrs, ctrl, transclude) => {
			MultiTransclude.transclude(iElem,transclude);
		},
		scope:{},
		transclude:true,
		template:
			`<div transclude-id="firstDiv">
				Internal template content1
			</div><br/>
			
			<div transclude-id="secondDiv">
				Internal template content2
			</div><br/>
			<div transclude-id="thirdDiv">
				Internal template content3
			</div><br/>
			<div transclude-id="listDiv"></div><br/>
			<div transclude-id="listDiv2"></div>`
	};
});



app.factory("MultiTransclude",function(){
	return{
		
		//transclude function will take the content of the directive tag identified by "transclude-to" attributes
		//and will map it with the template tag identified by "transclude-id" attribute.
		// By using this you can take the value entered by the user between the custom tag without overwriting your
		//content from template
		transclude : function(elem,transcludeFn){
			transcludeFn((clone) => {
				angular.forEach(clone,(cloneEl) => {
					
					if(cloneEl.attributes){
						
						//get desired target ID
						var tId= cloneEl.attributes["transclude-to"].value;
						
						//find target element with that ID
						var target = elem.find(`[transclude-id="${tId}"]`);
						
						//append element to target
						if(target.length){
							target.append(cloneEl);
						}else{
							cloneEl.remove();
						}
					}
				})
			});
		}
	
	};
	
});
	