app.directive("myDropDown",() => {
	return {
		scope :{},
		transclude : true,
		template:`
			<div  style="border-style:solid;border-width:1px;" ng-transclude ng-click="toggleTarget()">
			</div>`,
		controller : ($scope) => {
			$scope.toggleTarget = () => {
				this.targetOpen = !this.targetOpen;
			};
		}
	};
});

app.directive("myTrigger", () => {
	return {
		transclude:true,
		template :`
			<div ng-transclude></div>`
	};
});

app.directive("myTarget", () => {
	return {
		transclude:true,
		require : "^myDropDown", // ^ tells that myDropDown is the parent for this directive
		template :`
			<div ng-show="ctrl.targetOpen" ng-transclude></div>`,
		link: (scope,elem,attrs,ctrl) => {
			scope.ctrl = ctrl;
		}
	};
});
