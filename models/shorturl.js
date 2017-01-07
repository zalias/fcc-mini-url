var mydb = require('../utils/dbutil.js');

var Schema = mydb.Schema;

var shortUrlSchema = new Schema({
  original_url: { type: String, unique: true },
  short_url: { type: Number, unique: true },
});

var ShortUrl = mydb.model('User', shortUrlSchema);

module.exports = ShortUrl;
