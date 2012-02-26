var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Test(name) {
  this.name = name;
  EventEmitter.call(this);
}

util.inherits(Test, EventEmitter);

Test.prototype.run = function run() {
  var future = new Date().getTime() + 10000; // 10 secs from now
  
  function interval(test) {
    process.nextTick( function() {
      if(future > new Date().getTime()) { interval(test); } 
      else { test.emit('complete', true); }
    });
  }

  interval(this);
}

module.exports = Test;
