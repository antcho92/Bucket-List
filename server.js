var express = require('express'),
    port = 8080,
    bp = require('body-parser'),
    path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(express.static(path.join(__dirname, './client')));
app.use(bp.json());

var session = require('express-session')
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8080, function() {
  console.log(`listening on port ${port}`)
})
