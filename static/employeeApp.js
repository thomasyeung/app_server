
var app = angular.module('employeeApp', ['ngRoute','tc.chartjs']);

app.config(function ($routeProvider) {
    $routeProvider
	.when('/', {
	    controller: 'mainController',
        templateUrl: '/partials/main.html'
    })
    .when('/dashboard', {
	    controller: 'dashboardController',
        templateUrl: '/partials/dashboard.html'
    })
	.when('/edit', {
	    controller: 'newController',
        templateUrl: '/partials/edit.html'
    })
	.when('/back', {
	    controller: 'mainController',
        templateUrl: '/partials/main.html'
    })
    .when('/admin', {
        controller: 'adminController',
        templateUrl: '/partials/admin.html'
    })
    .when('/example', {
        controller: 'exampleController',
        templateUrl: '/partials/example.html'
    })
    .when('/timeline', {
        controller: 'exampleController',
        templateUrl: '/partials/timeline.html'
    })
    .when('/registration', {
        controller: 'exampleController',
        templateUrl: '/partials/registration.html'
    })
    .when('/confirm', {
        controller: 'confirmController',
        templateUrl: '/partials/confirm.html'
    })
    .when('/customers', {
        controller: 'customersCtrl',
        templateUrl: '/partials/customers.html'
    })
    .when('/d3charts', {
        controller: 'd3Charts',
        templateUrl: '/partials/d3charts.html'
    })
    ;

});


/*
function customersController($scope,$http) {
    $http.get('dummy_data.json')
    .success(function(response) {$scope.employees = response.employees;});
}
*/
