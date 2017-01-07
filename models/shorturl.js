var mongoose = require('../utils/dbutil.js');

var Schema = mongoose.Schema;

var ShortUrlSchema = new Schema({
  original_url: { type: String, unique: true, required: true },
  short_url: { type: Number, unique: true, required: true }
});

module.exports = mongoose.model('ShortUrl', ShortUrlSchema);

