app.directive('aboutDirective', [function(){
	return {
		restrict : 'E',
		controller : 'profileController',
		templateUrl : 'aboutDirective.html',
		link : function (scope, element, attrs) {
			console.log("About Directive loaded");
		}
	}
}]);