app.controller('dashboardController', ['$scope', 'usersFactory', 'dashboardFactory', '$routeParams', function($scope, uF, dF, $routeParams) {
  var self = this;
  uF.checkSess(function(user) {
    self.user = user;
    //get the user's events
    dF.getMyEvents(user._id, getEvents);
    //get the other users
    uF.index(getUsers);
  });
  function getUsers(users, currUserId) {
    //filter the users to exclude current user
    self.users = users.filter(function(user) {
      return user._id != self.user._id;
    });
    self.event = {};
  }
  function getEvents(user) {
    self.user = user;
    self.event = {};
  }
  this.createEvent = function() {
    this.event.creator = this.user._id;
    dF.createEvent(this.event, this.user._id, getEvents)
  }
  this.checked = function(event) {
    dF.completed(event, getEvents);
  }
}])
