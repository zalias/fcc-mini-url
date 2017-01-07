'use strict';

var express = require('express');
var moment = require('moment');
var pug = require('pug');
var shortener = require('./controllers/shortener.js');

var app = module.exports = express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');


app.get('/new/:url(*)', shortener.new_url);
app.get('/:id([0-9]+)', shortener.short_link);
app.get('/', shortener.home_page);

app.listen(process.env.PORT || 8080, function () {
  console.log('App listening at ', process.env.PORT);
});