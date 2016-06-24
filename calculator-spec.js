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

});
