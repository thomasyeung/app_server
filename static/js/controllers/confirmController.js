app.controller('confirmController', function($scope,$location, Data) {

    $scope.newEmp = Data.newEmp;

    Data.success(function(data) {
        $scope.employees = data.employees;
    });


    $scope.goToEdit = function(){
        $location.path("/edit");
    }

    $scope.goToHome = function(){
        $scope.employees.push($scope.newEmp);
        $location.path("/");
    }

});