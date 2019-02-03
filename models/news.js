const mongoose = require('mongoose');

const News = mongoose.model('News', {
  title: String,
  content: String,
});

module.exports = News;
