app.directive('projectDirective',[ function() {
	return {
		restrict : 'E',
		controller : 'profileController',
		templateUrl : 'projectDirective.html',
		link : function (scope, element, attrs) {
			console.log('Project Directive loaded');
		}
	}
}]);