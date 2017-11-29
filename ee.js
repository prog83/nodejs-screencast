var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter();

server.on('request', function (request) {
  request.approved = true;
});

server.on('request', function (request) {
  console.log(request);
});

server.emit('request', {from: 'Client'});

server.emit('request', {from: 'Other client'});

server.on('error', function () {
  console.log('error test');
});

server.emit('error');
