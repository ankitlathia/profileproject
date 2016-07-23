app.controller('profileController', ['$rootScope','$scope', 'appService', function($rootScope, $scope, appService){
	
	$scope.siteHeader = appService.getheader();
	
}]);