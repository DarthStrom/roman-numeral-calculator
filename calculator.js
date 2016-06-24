var converter = require('./converter');

exports.add = function(x, y) {
  var sum = x.toNumber() + y.toNumber();
  return sum.toRoman();
};

exports.subtract = function(x, y) {
  var difference = x.toNumber() - y.toNumber();
  return difference.toRoman(difference);
}
