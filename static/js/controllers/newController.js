app.controller('newController', function($scope,$location, Data) {
   //$scope.employees = Data.employees;


	
	$scope.addUser = function(){
     	 $scope.newEmp = {
			"name": $scope.newName,
			"class": $scope.newSkill,
            "address":$scope.newAddress
	      };
		Data.newEmp = $scope.newEmp;


	   $location.path("/confirm");
	}
	
});