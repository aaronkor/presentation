var express = require('express'),
    app = express.createServer(),
    Test = require('./test');

app.get('/', function(req, res) {
  res.send('pleasure...')
});

app.get('/run/:name', function(req, res) {
  var testName = req.params.name;
  var test = new Test(testName);
  test.on('complete', function(result) {
    res.send(result);
  });
  test.run();
});

app.listen(3001);
console.log('listening on http://localhost:3001');
