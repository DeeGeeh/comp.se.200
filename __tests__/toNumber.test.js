import toNumber from '../src/toNumber.js';

describe('Testing toNumber', () => {

  it('should return the number if the value is a number', () => {
    expect(toNumber(1)).toBe(1);
  });

  it('if value is a symbol, return NaN', () => {
    expect(toNumber(Symbol('1'))).toBe(NaN);
  });

  it('if value is an object, return NaN', () => {
    expect(toNumber({ a: 1 })).toBe(NaN);
  });

  it('if value is a string, return the number value of the string', () => {
    expect(toNumber('1')).toBe(1);
  });
});