var converter = require('./converter');

describe('converter', function () {

  describe('romanToNumber', function () {

    it('can convert the base glyphs', function () {
      expect(converter.romanToNumber("I")).toBe(1);
      expect(converter.romanToNumber("V")).toBe(5);
      expect(converter.romanToNumber("X")).toBe(10);
      expect(converter.romanToNumber("L")).toBe(50);
      expect(converter.romanToNumber("C")).toBe(100);
      expect(converter.romanToNumber("D")).toBe(500);
      expect(converter.romanToNumber("M")).toBe(1000);
    });

    it('can convert II', function () {
      expect(converter.romanToNumber("II")).toBe(2);
    });

    it('can convert combined numbers', function () {
      expect(converter.romanToNumber("XVI")).toBe(16);
      expect(converter.romanToNumber("LX")).toBe(60);
    });

    it('can handle subtractive notation', function () {
      expect(converter.romanToNumber("IV")).toBe(4);
      expect(converter.romanToNumber("IX")).toBe(9);
      expect(converter.romanToNumber("XL")).toBe(40);
      expect(converter.romanToNumber("XC")).toBe(90);
      expect(converter.romanToNumber("CD")).toBe(400);
      expect(converter.romanToNumber("CM")).toBe(900);
    })

    it('can convert combined numbers with subtractive notation', function () {
      expect(converter.romanToNumber("XIV")).toBe(14);
      expect(converter.romanToNumber("LXXIV")).toBe(74);
      expect(converter.romanToNumber("MCMLIV")).toBe(1954);
      expect(converter.romanToNumber("MCMXC")).toBe(1990);
      expect(converter.romanToNumber("MMXIV")).toBe(2014);
    });

    it('can handle weird numbers', function () {
      expect(converter.romanToNumber("IIII")).toBe(4);
      expect(converter.romanToNumber("CCCCXXXX")).toBe(440);
      expect(converter.romanToNumber("IIIIII")).toBe(6);
      expect(converter.romanToNumber("XXXXXX")).toBe(60);
      expect(converter.romanToNumber("MDCCCCX")).toBe(1910);
      expect(converter.romanToNumber("DD")).toBe(1000);
    });
  });

  describe('numberToRoman', function () {

    it('can produce the base glyphs', function () {
      expect(converter.numberToRoman(1)).toBe("I");
      expect(converter.numberToRoman(5)).toBe("V");
      expect(converter.numberToRoman(10)).toBe("X");
      expect(converter.numberToRoman(50)).toBe("L");
      expect(converter.numberToRoman(100)).toBe("C");
      expect(converter.numberToRoman(500)).toBe("D");
      expect(converter.numberToRoman(1000)).toBe("M");
    });

    it('can convert to multiple glyphs', function () {
      expect(converter.numberToRoman(2)).toBe("II");
    });

    it('can convert to mixed glyphs', function () {
      expect(converter.numberToRoman(16)).toBe("XVI");
    });

    it('can convert to subtractive notation', function () {
      expect(converter.numberToRoman(4)).toBe("IV");
      expect(converter.numberToRoman(9)).toBe("IX");
      expect(converter.numberToRoman(40)).toBe("XL");
      expect(converter.numberToRoman(90)).toBe("XC");
      expect(converter.numberToRoman(400)).toBe("CD");
      expect(converter.numberToRoman(900)).toBe("CM");
    });
  });
});
