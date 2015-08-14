app.directive("myTextfield", () => {
	return {
		scope :{
			mytype :"=",
			validation : "=",
			fieldSize : "=",
			myname : "=",
			myplaceholder : "="
		},
		transclude : true,
		templateUrl:"myTextField/myTextfieldView.html",
		link:(scope,iElem,iAttr) => {
			try{
				var errChildElem = iElem.find("my-errormsg")[0];
				scope.errorMsg = errChildElem.innerHTML;
				console.log(errChildElem.innerHTML);
			}catch(e){
				console.log(e.message);
				console.error("Error: errormsg element tag not found")
			}
			
			
			try{
				scope.mytype = iAttr.mytype;
				scope.myname = iAttr.myname;
				scope.myplaceholder  = iAttr.myplaceholder;
			}catch(e){
				console.error(e.message);
			}
		}
	}
});


//optional field inside <my-textfield>
//can be used as <my-successmsg>...</my-successmsg>
app.directive("myErrormsg", () => {
	return{
		restrict: 'E',
		link:(scope,iElem,iAttr) => {
			//we need not show this tag on UI so hide it
			iAttr.$set('style','display:none');
		}
	};
});


//optional field inside <my-textfield>
//can be used as <my-successmsg>...</my-successmsg>
app.directive("mySuccessmsg", () => {
	return{
		restrict: 'E',
		link:(scope,iElem,iAttr) => {
			//we need not show this tag on UI so hide it
			iAttr.$set('style','display:none')
		}
	};
});
