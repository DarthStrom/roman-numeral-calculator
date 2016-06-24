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
    });

    describe('subtractive notation', function () {
      it('can handle IV', function () {
        expect(converter.romanToNumber("IV")).toBe(4);
      });

      it('can handle XL', function () {
        expect(converter.romanToNumber("XL")).toBe(40);
      });

      it('can handle CD', function () {
        expect(converter.romanToNumber("CD")).toBe(400);
      });
    });
  });
});
