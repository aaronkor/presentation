var express = require('express');
var app = express.createServer();
var port = 8080

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

app.listen(port);
console.log('Listening at http://localhost:' + port + ' ...\n');
