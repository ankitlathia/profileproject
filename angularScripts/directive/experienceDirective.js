app.directive('experienceDirective', [function(){
	return {
		restrict : 'E',
		controller : 'profileController',
		templateUrl : 'experienceDirective.html',
		link : function (scope, element, attrs) {
			console.log("Experience Directive loaded");
		}
	}
}]);