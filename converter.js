var _ = require('lodash');

var baseValues = {
  "M": 1000,
  "D": 500,
  "C": 100,
  "L": 50,
  "X": 10,
  "V": 5,
  "I": 1,
};

var abbreviations = {
  "IIII":  "IV",
  "VIIII": "IX",
  "XXXX":  "XL",
  "LXXXX": "XC",
  "CCCC":  "CD",
  "DCCCC": "CM"
};

exports.numberToRoman = function (number) {
  return encode(number);
}

exports.romanToNumber = function (roman) {
  return tally(expandAbbreviations(roman));
};

function expandAbbreviations(roman) {
  return _.reduce(abbreviations, function (expanded, short, long) {
    return _.replace(expanded, short, long);
  }, roman);
}

function encode(number) {
  var result = ""

  _.each(baseValues, function (baseValue, glyph) {
    while (baseValue <= number) {
      number -= baseValue;
      result += glyph;
    }
  });

  return result
}

function tally(roman) {
  return _.reduce(roman, function (soFar, glyph) {
    return soFar += baseValues[glyph];
  }, 0);
}
