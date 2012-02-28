var EventEmitter = require('events').EventEmitter;
var util = require('util');
var fs = require('fs');
var path = require('path');

function Test(name, dir) {
  if(!dir) {
    dir = __dirname;
  }
  this.name = name;
  var testFile = name + '.json';
  this.filePath = path.join(dir, testFile);

  EventEmitter.call(this);
}

util.inherits(Test, EventEmitter);

Test.prototype.run = function run() {
  var future = new Date().getTime() + 10000; // 10 secs from now
  
  function interval(test) {
    process.nextTick( function() {
      if(future > new Date().getTime()) { interval(test); } 
      else { 
        fs.readFile(test.filePath, function(err, data) {
          if(err) {
            test.emit('complete', {"success" : false, "message" : err});
          } else {
            test.emit('complete', {"success" : true});
          }
        });
      }
    });
  }

  interval(this);
}

module.exports = Test;
