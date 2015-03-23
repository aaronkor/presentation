var http = require('http');
var express = require('express');
var app = express();
var port = 8080;

var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.set('view engine', 'jade');
app.set('view options', {
  layout: false,
  pretty: true
});

app.use('/media', express.static(__dirname + '/media'));

app.get('/', function(req, res){
  res.render('index');
});

//socket.io stuff
io.on('connection', function(socket) {
  console.log('socket connected');
  socket.on('timeout-example-request', function(data) {
    console.log('timeout-example-request');
    setTimeout( function () {
      socket.emit('timeout-example-response', 'DARY!');
    }, 5000);
    socket.emit('timeout-example-response', 'LEGEN...');
  });
});

server.listen(port);
console.log('Listening at http://localhost:' + port + ' ...\n');
