var mongoose = require('mongoose');
var User = mongoose.model('User');
var Event = mongoose.model('Event');

module.exports = (function() {
  return {
    create: function(req, res) {
      User.findOne({_id: req.body.creator}, function(err, creator) {
        if (err) {throw err}
        if (req.body.joiner && req.body.joiner != req.body.creator) {
          User.findOne({_id: req.body.joiner}, function(err, joiner) {
            if (err) {throw err}
            var event = new Event(req.body);
            event.save(function(err, event) {
              if (err) {throw err}
              creator.events.push(event);
              creator.save(function(err, creator) {
                if (err) {throw err}
                joiner.joined.push(event);
                joiner.save(function(err, joiner) {
                  if (err) {throw err}
                  res.json(event);
                })
              })
            })
          })
        } else {
          var event = new Event(req.body);
          event.save(function(err, event) {
            if (err) {throw err}
            creator.events.push(event);
            creator.save(function(err, creator) {
              if (err) {throw err}
              res.json(event);
            })
          })
        }
      })
    },
    completed: function(req, res) {
      Event.findOne({_id: req.body._id}, function(err, event) {
        event.completed = req.body.completed;
        event.save(function(err, event) {
          res.json(event);
        })
      })
    }
  }
})()
