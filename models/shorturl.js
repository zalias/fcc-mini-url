var mongoose = require('../utils/dbutil.js');

var Schema = mongoose.Schema;

var ShortUrlSchema = new Schema({
  original_url: { type: String, unique: true, required: true },
  short_url: { type: Number, unique: true, required: true },
  visit_count: { type: Number, default: 0 }
});

module.exports = mongoose.model('ShortUrl', ShortUrlSchema);

