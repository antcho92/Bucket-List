app.factory('dashboardFactory', ['$http', function($http) {
  function DashboardFactory() {
    var self = this;
    this.index = function(callback) {
      $http.get('/questions').then(function(res) {
        callback(res.data)
      });
    };
  }
  return new DashboardFactory();
}])
