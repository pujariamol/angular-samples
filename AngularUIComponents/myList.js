
app.directive("myList",() => {
	return{
	//	scope:true, // if this property is not set then multiple my-list tags can not exist on the page. due to scope issues
		scope:{
			items : "=items",
			selected: "=selected"
			
		},
		template:`
				<div style="border-style:solid;border-width:1px;">
					This is custom My List
					<ul>
						<li ng-repeat="item in items"
						ng-bind="item"
						ng-class="{'my-selected':item === selected}"
						ng-click="selectItem(item)">
						</li>
					</ul>
				</div>
				`,
		link:(scope,iElem,iAttr) => {
			//this will actually take the value from the attribute Items 
			//passed by the user and will associate it with items which is them available
			// to the template above so that angularJS's ng-repeat can iterate over it.
		
		//	scope.items = JSON.parse(iAttr.items); // naive approach to get the value from the tag, if you don't assign values in scope object
			
			//this method is called whenever an item is clicked on the page
			scope.selectItem = (item) => {
				alert(item);
				scope.selected = item;
			};
		}
	};
});


