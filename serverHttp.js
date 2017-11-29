var http = require('http');
var url = require('url');

var server = new http.Server();

server.listen(1337,'127.0.0.1');

var counter = 0;
server.on('request', function (req, res) {
  // console.log(req.method, req.url);
  console.log(req.headers);

  var urlParsed = url.parse(req.url, true);

  if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
    res.statusCode = 200;
    res.setHeader('Cache-control', 'no-cache');
    res.end(urlParsed.query.message);
  }
  else {
    res.statusCode = 404;
    res.end('Page not found');
  }
  res.end('Hello world!' + ++counter);
})
