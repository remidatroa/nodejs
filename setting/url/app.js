# testing current url request by the user
var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
  var page = url.parse(req.url).pathname;
  console.log(page);
  res.writeHead(200, {"Content-Type" : "text/plain"});
  res.write('Welcome bruh');
  res.end();
});

server.listen(8080);
