var express = require('express');
var app = express.createServer();

app.set('view engine', 'jade');
app.set('view options', {
  layout: false
});

app.use('/media', express.static(__dirname + '/media'));
//app.use('/media/js', express.static(__dirname + 'media/js/'));

app.get('/', function(req, res){
  res.send('hello world\n' + __dirname + '/media/img/nodejs-light.eps\n');
});

app.get('/slides', function(req, res){
  res.render('slides');
});

app.listen(3000);
console.log('Listening at http://localhost:3000 ...\n');
