var Test = require('./test');

var test = new Test('pleasure');
test.on('complete', function(result) {
  console.log('Run complete. Result is', result);
});

test.run();

console.log(test, 'started running...\n');
