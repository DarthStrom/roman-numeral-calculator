var calculator = require('./calculator');

describe('calculator', function () {

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
  })

  it('upgrades the glyph instead of repeating', function () {
    expect(calculator.add("D", "D")).toBe("M");
  })

});
