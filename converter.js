var _ = require('lodash');

var glyphs = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

var abbreviations = {
  "IIII": "IV"
};

exports.romanToNumber = function (roman) {
  var result = 0;
  expandedRoman = expandAbbreviations(roman);
  for (var i = 0; i < expandedRoman.length; i++) {
    result += glyphs[expandedRoman[i]];
  }

  return result;
};

function expandAbbreviations(roman) {
  return _.reduce(abbreviations, function(expanded, short, long) {
    return _.replace(expanded, short, long);
  }, roman);
}
