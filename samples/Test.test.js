var Test = require('./test');
console.log('Test is', Test);

var test = new Test('pleasure');
test.on('complete', function(result) {
  console.log('Run complete. Result is', result);
});
console.log('test is', test);

test.run();
