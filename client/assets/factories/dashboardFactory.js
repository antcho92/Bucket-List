app.factory('dashboardFactory', ['$http', '$location', function($http, $location) {
  function DashboardFactory() {
    var self = this;
    this.createEvent = function(event,userId, callback) {
      $http.post('/events', event).then(function(res) {
        self.getMyEvents(userId, callback)
      })
    };
    this.getMyEvents = function(userId, callback) {
      $http.get(`/events/${userId}`).then(function(res) {
        callback(res.data);
      })
    };
    this.completed = function(event, callback) {
      $http.post('/events/completed', event).then(function(res) {
      })
    }
  }
  return new DashboardFactory();
}])
