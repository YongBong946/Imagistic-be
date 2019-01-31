const mongoose = require('mongoose');
const imageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  album: [{
      type: String,
      required: true
    }],
  tags: [{
      type: String,
      required: true
  }]
});

module.exports = mongoose.model('Image', imageSchema);
