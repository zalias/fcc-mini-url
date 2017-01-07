var mongoose = require("mongoose");

var ShortUrlSchema = new mongoose.Schema({
  original_url: {
    type: String,
    unique: true
  },
  short_url: {
    type: Number,
    unique: true,
    get: v => Math.round(v),
    set: v => Math.round(v)
  }
});

var ShortUrl = mongoose.model('ShortUrl', ShortUrlSchema);

module.exports = {
  ShortUrl : ShortUrl
}