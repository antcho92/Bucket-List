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
    .when('/new_question', {
      templateUrl: 'partials/ask.html',
      controller: 'newController',
      controllerAs: 'nC'
    })
    .when('/question/:questionId/new_answer', {
      templateUrl: 'partials/answer.html',
      controller: 'questionController',
      controllerAs: 'qC'
    })
    .when('/question/:questionId', {
      templateUrl: 'partials/question.html',
      controller: 'questionController',
      controllerAs: 'qC'
    })
    .otherwise('/')
})
