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
  "DCCCC": "CM",
  "CCCC":  "CD",
  "LXXXX": "XC",
  "XXXX":  "XL",
  "VIIII": "IX",
  "IIII":  "IV"
};

Number.prototype.toRoman = function () {
  var prefix = getPrefix(this);
  return prefix + abbreviate(encode(Math.abs(this)));
}

String.prototype.toNumber = function () {
  return tally(expandAbbreviations(this));
};

function getPrefix(number) {
  return number < 0 ? "-" : "";
}

function abbreviate(expanded) {
  return _.reduce(abbreviations, function (roman, short, long) {
    return _.replace(roman, long, short);
  }, expanded);
}

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
