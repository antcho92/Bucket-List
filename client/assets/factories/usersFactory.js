app.factory('usersFactory', ['$http', '$location', function($http, $location) {
  function UsersFactory() {
    var self = this;
    this.login = function(user, callback) {
      $http.post('/login', user).then(function(res) {
        if (res.data.errors) {
          callback(res.data.errors);
        } else {
          $location.url('/dashboard')
        }
      })
    };
    this.checkSess = function(callback) {
      $http.get('/checkSess').then(function(res) {
        if (!res.data) {
          $location.url('/');
        } else {
          callback(res.data);
          if ($location.url() === '/') {
            $location.url('/dashboard');
          }
        }
      });
    };
  }
  return new UsersFactory();
}])
