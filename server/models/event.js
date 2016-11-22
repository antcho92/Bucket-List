var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5
  },
  description: {
    type: String,
    required: true,
    minlength: 10
  },
  completed: {
    type: Boolean,
    default: false
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  joiner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

mongoose.model('Event', eventSchema);
