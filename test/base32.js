const base32 = require('../base32');
const assert = require('assert');

const key = '12345678901234567890';
const value = 'GEZDGNBVGY3TQOJQGEZDGNBVGY3TQOJQ';

exports.testEncode = function() {
  assert.equal(base32.encode(key), value, 'Should be encode');
};

exports.testDecode = function() {
  assert.equal(base32.decode(value), key, 'Should be decode');
};