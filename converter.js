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
  return tally(expandAbbreviations(roman));
};

function expandAbbreviations(roman) {
  return _.reduce(abbreviations, function(expanded, short, long) {
    return _.replace(expanded, short, long);
  }, roman);
}

function tally(roman) {
  return _.reduce(roman, function(soFar, glyph) {
    return soFar += glyphs[glyph];
  }, 0);
}
