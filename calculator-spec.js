var calculator = require('./calculator');

describe('calculator', function () {

  describe('addition', function () {

    it('treats empty strings as 0', function () {
      expect(calculator.add("", "")).toBe("");
      expect(calculator.add("I", "")).toBe("I");
      expect(calculator.add("", "II")).toBe("II");
    });

    it('adds 1s', function () {
      expect(calculator.add("I", "I")).toBe("II");
    });

    it('adds 1 and 2', function () {
      expect(calculator.add("I", "II")).toBe("III");
    });

    it('adds 2 and 2', function () {
      expect(calculator.add("II", "II")).toBe("IV");
    });

    it('can add larger numbers by concatenation', function () {
      expect(calculator.add("XX", "II")).toBe("XXII");
    });

    it('concatenates in the right order', function () {
      expect(calculator.add("XIV", "LX")).toBe("LXXIV");
    });

    it('upgrades the glyph instead of repeating', function () {
      expect(calculator.add("D", "D")).toBe("M");
    });
  });

  describe('subtraction', function () {

    it('subtracts', function () {
      expect(calculator.subtract("", "")).toBe("");
      expect(calculator.subtract("I", "")).toBe("I");
      expect(calculator.subtract("II", "")).toBe("II");
      expect(calculator.subtract("I", "I")).toBe("");
      expect(calculator.subtract("II", "I")).toBe("I");
      expect(calculator.subtract("II", "II")).toBe("");
      expect(calculator.subtract("XX", "II")).toBe("XVIII");
      expect(calculator.subtract("LX", "XIV")).toBe("XLVI");
      expect(calculator.subtract("M", "D")).toBe("D");
    });

    it('can represent negatives', function () {
      expect(calculator.subtract("", "I")).toBe("-I");
      expect(calculator.subtract("II", "XX")).toBe("-XVIII");
    });
  });
});
