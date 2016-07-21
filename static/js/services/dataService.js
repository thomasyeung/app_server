app.factory('Data', function($http) {

 // var obj = {content:null};

   return $http.get('/employees');
      
});

app.factory('Chart', function($http) {

 // var obj = {content:null};

   return $http.get('/charts');
      
});

