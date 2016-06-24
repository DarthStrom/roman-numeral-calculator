var _ = require('lodash');

var baseValues = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

var glyphs = {
  1:    "I",
  5:    "V",
  10:   "X",
  50:   "L",
  100:  "C",
  500:  "D",
  1000: "M"
}

var abbreviations = {
  "IIII":  "IV",
  "VIIII": "IX",
  "XXXX":  "XL",
  "LXXXX": "XC",
  "CCCC":  "CD",
  "DCCCC": "CM"
};

exports.numberToRoman = function (number) {
  return glyphs[number];
}

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
    return soFar += baseValues[glyph];
  }, 0);
}
