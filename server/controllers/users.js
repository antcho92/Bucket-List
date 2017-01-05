var mongoose = require('mongoose');
var User = mongoose.model('User');
var Event = mongoose.model('Event');

module.exports = (function() {
  return {
    index: function(req, res) {
      User.find({}, function(err, users) {
        if (err) {
          console.log(err);
        }
        res.json(users);
      })
    },
    getUserEvents: function(req, res) {
      User.findOne({_id: req.params.userId})
      .populate({
        path: 'events',
        model: 'Event',
        populate: {
          path: 'joiner creator',
          model: 'User'
        },
      })
      .populate({
        path: 'joined',
        model: 'Event',
        populate: {
          path: 'creator joiner',
          model: 'User'
        },
      })
      .exec(function(err, user) {
        if (err) {console.log(err)}
        res.json(user);
      });
    }
  }
})()
