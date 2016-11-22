var app = angular.module('app', ['ngRoute', 'ngMessages']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'loginController',
      controllerAs: 'lC'
    })
    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller: 'dashboardController',
      controllerAs: 'dC'
    })
    .when('/user/:userId', {
      templateUrl: 'partials/user.html',
      controller: 'userController',
      controllerAs: 'uC'
    })
    .otherwise('/')
})
