var converter = require('./converter');

exports.add = function(x, y) {
  var xNumber = converter.romanToNumber(x);
  var yNumber = converter.romanToNumber(y);
  var sum = xNumber + yNumber;

  return converter.numberToRoman(sum);
};

exports.subtract = function(x, y) {
  var xNumber = converter.romanToNumber(x);
  var yNumber = converter.romanToNumber(y);
  var difference = xNumber - yNumber;

  return converter.numberToRoman(difference);
}

// note: maybe create arabic and roman numeral classes that can convert
// themselves instead of having a converter
