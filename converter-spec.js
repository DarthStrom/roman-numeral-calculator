var converter = require('./converter');

describe('converter', function () {

  describe('romanToNumber', function () {

    it('can convert I', function () {
      expect(converter.romanToNumber("I")).toBe(1);
    });

    it('can convert II', function () {
      expect(converter.romanToNumber("II")).toBe(2);
    })
  });
});
