app.controller('mainController', function($scope, Data,$location) { 
 
    Data.success(function(data) {   
		  $scope.employees = data.employees;
	   });
  
	$scope.goToEdit = function(){
		$location.path("/edit");
	}
	
});