var express = require('express');
var app = express.createServer();
var port = 8080;
var io = require('socket.io').listen(app);

app.set('view engine', 'jade');
app.set('view options', {
  layout: false,
  pretty: true
});

app.use('/media', express.static(__dirname + '/media'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/slides', function(req, res){
  res.render('slides');
});


//socket.io stuff
io.sockets.on('connection', function(socket) {
  console.log('socket connected');
  socket.on('timeout-example-request', function(data) {
    console.log('timeout-example-request');
    setTimeout( function () {
      socket.emit('timeout-example-response', 'DARY!');
    }, 5000);
    socket.emit('timeout-example-response', 'LEGEN...');
  });
});


app.listen(port);
console.log('Listening at http://localhost:' + port + ' ...\n');
