app.controller('userController', ['$scope', '$routeParams', 'dashboardFactory', 'usersFactory', function($scope, $routeParams, dF, uF) {
  var self = this;
  uF.checkSess(function(user) {
    this.user = user;
    dF.getMyEvents($routeParams.userId, getEvents);
  });
  function getEvents(user) {
    self.otherUser = user;
    self.done = user.events.concat(user.joined).filter(function(event) {
      return event.completed;
    })
    self.pending = user.events.concat(user.joined).filter(function(event) {
      return !event.completed;
    })
  }
}])
