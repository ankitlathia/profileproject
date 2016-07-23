app.service('appService',['$rootScope', function(rootScope) {
	
	
	var header = {
			title: "Ankit Lathia",
			headerContent : [
			      {name : "Projects", ref: "#about"},
				 {name : "Experience", ref: "#exp"},
				 {name : "Education", ref: "#edu"},
				 {name : "About", ref : "#contact"}
			]
	};
	
	return {
        getheader: function () {
            return header;
        }
	}
}]);