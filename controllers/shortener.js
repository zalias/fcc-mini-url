var ShortUrl = require('../models/shorturl.js');
var validator = require("validator");



exports.new_url = function (req, res) {
  var url = req.params.url;
  console.log("Request Url: " + url);
  if(validator.isURL(url)){
    ShortUrl.findOne({original_url:url}, function(err, urlpair){
      if (err) {
        console.log(err);
        res.send({"error":"Database error"});
      }
      if (urlpair){ //Already exists, send data
        res.send({
            "original_url":urlpair.original_url, 
            "short_url": urlpair.short_url
        });
      } else { //Insert into DB and send
        var id = Math.floor(Math.random()*9000) + 1000;
        ShortUrl.findOne({short_url:id}, function(err, urlpair) {
          if (err) {
            console.log(err);
            res.send({"error":"Database error"});
          }
          if (urlpair) { //Already exists, recalculate id
            id = Math.floor(Math.random()*9000) + 1000;
          }
          
          
          new ShortUrl({
            original_url: url,
            short_url: id
          }).save(function(err){
            if(err){
              console.log(err);
              res.end({"error":"Collision occured, Please try again!"});
            }
          });
          var rootAddress = 'https://fcc-api-url-shortener-zalias.c9users.io/';
          res.send({
            "original_url": url, 
            "short_url": rootAddress + id
          });
        });
      }
    });
  }
  else {
    res.send({"error" : "That is not a valid url"});
  }
};

//Working
exports.short_link = function (req, res) {
  ShortUrl.findOne({short_url : req.params.id}, function(err, urlpair){
      if (err) {
          console.log(err);
          res.send({"error":"Could not resolve that link."});
      }
      if (urlpair) {
        res.redirect(urlpair.original_url);
      } else {
        res.send({"error":"This url is not on the database."});
      }
  });
};

exports.home_page = function(req, res) {
  res.send("In progress");
};