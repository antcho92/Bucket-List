var login = require('./../controllers/login.js')

module.exports = function(app) {
  app.post('/login', login.login);
  app.get('/logout', login.logout);
  app.get('/checkSess', login.checkSess);
}
