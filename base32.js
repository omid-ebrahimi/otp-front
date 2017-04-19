var base32 = require('base32.js');

function bytes2str(bytes) {
  return String.fromCharCode.apply(String, bytes);
}

function str2bytes(str) {
  var bytes = [];
  for (var i = 0; i < str.length; i++) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}

module.exports.encode = function(str) {
  return base32.encode(str2bytes(str));
}
module.exports.decode = function(str) {
  var buf = base32.decode(str);
  return bytes2str(buf);
}