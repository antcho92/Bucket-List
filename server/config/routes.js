var login = require('./../controllers/login.js');
var users = require('./../controllers/users.js');
var events = require('./../controllers/events.js');

module.exports = function(app) {
  app.post('/login', login.login);
  app.get('/logout', login.logout);
  app.get('/checkSess', login.checkSess);
  app.get('/users', users.index);
  app.get('/events/:userId', users.getUserEvents);
  app.post('/events', events.create);
  app.post('/events/completed', events.completed);
}
