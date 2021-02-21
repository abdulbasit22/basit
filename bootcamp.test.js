const bootcamp = require('./bootcamp');

describe('even', () => {
  it('test positive even integer', () => {
    expect.assertions(2);
    expect(bootcamp.isEven(100)).toBe(true);
    expect(bootcamp.isOdd(100)).toBe(false);
  });

  it('test negative even integer', () => {
    expect.assertions(2);
    expect(bootcamp.isEven(-100)).toBe(true);
    expect(bootcamp.isOdd(-100)).toBe(false);
  });
});

describe('odd', () => {
  it('test positive odd integer', () => {
    expect.assertions(2);
    expect(bootcamp.isEven(50)).toBe(true);
    expect(bootcamp.isOdd(50)).toBe(false);
  });

  it('test negative odd integer', () => {
    expect.assertions(2);
    expect(bootcamp.isEven(-50)).toBe(true);
    expect(bootcamp.isOdd(-50)).toBe(false);
  });
});
