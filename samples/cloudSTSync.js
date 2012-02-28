var express = require('express'),
    app = express.createServer(),
    Test = require('./testSync');

app.get('/', function(req, res) {
  res.send('pleasure...')
});

app.get('/run/:name', function(req, res) {
  var testName = req.params.name;
  var test = new Test(testName);
  var result = test.run();
  console.log(result);
  res.send(result);
});

app.listen(3001);
console.log('listening on http://localhost:3001');
