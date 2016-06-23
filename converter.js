var glyphs = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}

exports.romanToNumber = function (roman) {
  var result = 0;
  for (var i = 0; i < roman.length; i++) {
    result += glyphs[roman[i]];
  }

  return result;
};
