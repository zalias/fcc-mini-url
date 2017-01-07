'use strict';

var express = require('express');
var moment = require('moment');
var pug = require('pug');
var validator = require("validator");

var ShortUrl = require('./models/shorturl');

var app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/new/:url(*)', function (req, res) {
  
  let url = req.params.url;
  
  console.log("Request Url: " + url);
  
  if(validator.isURL(url)){
    
    res.end("Valid");
  }
  else {
    //Return error JSON
    res.end(JSON.stringify({"error" : "That is not a valid url"}));
  }
});


app.get('/:id([0-9]+)', function (req, res) {
  //find id in mongodb
  // Forward
  res.redirect("http://www.google.com");
  //else
  //Link Not Found Page
  //{"error":"This url is not on the database."}
});

app.get('/', function (req, res) {
  var shorturl = ShortUrl({ original_url: "xyz", short_url: 1234 });
  
  res.end("In progress");
});


app.listen(process.env.PORT || 8080, function () {
  console.log('App listening at ', process.env.PORT);
});