var calculator = require('./calculator');

describe('calculator', function () {

  it('adds 1s', function () {
    expect(calculator.add("I", "I")).toBe("II");
  });

});

