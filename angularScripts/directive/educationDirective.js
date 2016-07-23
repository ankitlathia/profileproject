app.directive('educationDirective', [function() {
	return {
		restrict : 'E',
		controller : 'profileController',
		templateUrl : 'educationDirective.html',
		link : function(scope, elements, attrs) {
			console.log('Education Directive loaded');
		}
	}
}]);