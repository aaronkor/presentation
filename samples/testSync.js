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
}

Test.prototype.run = function run() {
  var future = new Date().getTime() + 10000; // 10 secs from now

  while(future > new Date().getTime()) {
    //waiting...
  }

  return {"success" : true}
}

module.exports = Test;
