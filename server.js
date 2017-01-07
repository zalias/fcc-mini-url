'use strict';

var express = require('express');
var moment = require('moment');
var pug = require('pug');
var urlPattern = require("url-pattern");

var app = express();

var pattern = new urlPattern(
  '(:protocol\\://)(:subdomain.):domain.:tld(/*)'
);

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/new/:url(*)', function (req, res) {
  //Check if url is real
  var urlParts = pattern.match(req.params.url);
  console.log(req.params.url);
  if (urlParts.protocol === ("http" || "https") && urlParts.subdomain != null){
    //Partly valid
    //Add url to mongodb and return json  
  } else {
    //Return error JSON
  }
  res.end("Yes");
});


app.get('/:id([0-9]+)', function (req, res) {
  //find id in mongodb
  // Forward
  res.redirect("http://www.google.com");
});

app.get('/', function (req, res) {
  res.end("In progress");
});


app.listen(process.env.PORT || 8080, function () {
  console.log('App listening at ', process.env.PORT);
});