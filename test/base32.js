var base32 = require('../base32');
var assert = require('assert');

var key = '12345678901234567890';
var value = 'GEZDGNBVGY3TQOJQGEZDGNBVGY3TQOJQ';

exports.testEncode = function() {
  assert.equal(base32.encode(key), value, 'Should be encode');
}

exports.testDecode = function() {
  assert.equal(base32.decode(value), key, 'Should be decode');
}