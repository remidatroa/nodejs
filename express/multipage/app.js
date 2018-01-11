var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Home bruh')
});

app.get('/about', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('about bruh')
});

app.get('/work/fullstack', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('fullstack js bruh')
});


app.listen(8080);
