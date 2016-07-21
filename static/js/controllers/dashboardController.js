app.controller('dashboardController', function($scope,$location, Chart) {



    $scope.showCharts = false;
    
    Chart.success(function(data) {  
        $scope.data = data.doughnutData;
    
        $scope.lineData = data.lineData;

        $scope.barData = data.barData;

        $scope.pieData = data.pieData;

        $scope.polarData = data.polarData;
        
        $scope.showCharts = true;
    });
    

});
