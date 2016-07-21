
app.controller('exampleController', function ($scope, $http){
    
    $scope.showUsers = false;
    
  $http.get('http://api.randomuser.me/0.4/?results=20').success(function(data) {
    $scope.users = data.results;
      $scope.showUsers = true;
  }).error(function(data, status) {
    alert('get data error!');
  });
  
  $scope.showDetail = function (u) {
    if ($scope.active != u.username) {
      $scope.active = u.username;
    }
    else {
      $scope.active = null;
    }
  };
    
    
  /*
  $scope.doPost = function() {
  
    $http.get('http://api.randomuser.me/0.4/').success(function(data) {
      
      var newUser = data.results[0];
      newUser.user.text = $('#inputText').val();
      newUser.date = new Date();
      $scope.users.push(newUser);
   
    }).error(function(data, status) {
      
      alert('get data error!');
      
    });
    
  }*/
    
});