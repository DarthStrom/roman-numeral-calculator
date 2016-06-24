var converter = require('./converter');

describe('converter', function () {

  describe('romanToNumber', function () {

    it('can convert I', function () {
      expect(converter.romanToNumber("I")).toBe(1);
    });

    it('can convert II', function () {
      expect(converter.romanToNumber("II")).toBe(2);
    });

    it('can convert V', function () {
      expect(converter.romanToNumber("V")).toBe(5);
    });

    it('can convert X', function () {
      expect(converter.romanToNumber("X")).toBe(10);
    });

    it('can convert L', function () {
      expect(converter.romanToNumber("L")).toBe(50);
    });

    it('can convert C', function () {
      expect(converter.romanToNumber("C")).toBe(100);
    });

    it('can convert D', function () {
      expect(converter.romanToNumber("D")).toBe(500);
    });

    it('can convert M', function () {
      expect(converter.romanToNumber("M")).toBe(1000);
    });

    it('can convert combined numbers', function () {
      expect(converter.romanToNumber("XVI")).toBe(16);
      expect(converter.romanToNumber("LX")).toBe(60);
    });

    describe('subtractive notation', function () {
      it('can handle IV', function () {
        expect(converter.romanToNumber("IV")).toBe(4);
      });

      it('can handle IX', function () {
        expect(converter.romanToNumber("IX")).toBe(9);
      });

      it('can handle XL', function () {
        expect(converter.romanToNumber("XL")).toBe(40);
      });

      it('can handle XC', function () {
        expect(converter.romanToNumber("XC")).toBe(90);
      });

      it('can handle CD', function () {
        expect(converter.romanToNumber("CD")).toBe(400);
      });

      it('can handle CM', function () {
        expect(converter.romanToNumber("CM")).toBe(900);
      })
    });

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
});
