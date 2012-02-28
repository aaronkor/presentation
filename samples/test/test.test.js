var Test = require('../test');
var path = require('path');
var fs = require('fs');

var testFile = 'myTest.json';
var testDir = path.join(__dirname, '..');

exports['json-parse'] = function(test) {
	var testPath = path.join(testDir, testFile);
	var testObj = fs.readFileSync(testPath);
	test.ok(testObj);
	var j = JSON.parse(testObj);
	test.ok(j);
	test.done();
}

exports['construct'] = function(test) {
	var t = new Test('myTest');
	test.equal(path.join(testDir, testFile), t.filePath);
	test.done();
}

exports['run_success'] = function(test) {
	var t = new Test('myTest', testDir);
	t.on('complete', function(result) {
		test.equals(true, result.success, JSON.stringify(result));
		test.done();
	})
	t.run();
}

exports['run_failure'] = function(test) {
	var t = new Test('non_existent');
	t.on('complete', function(result) {
		test.equal(false, result.success, JSON.stringify(result));
		test.done();
	})
	t.run();
}
