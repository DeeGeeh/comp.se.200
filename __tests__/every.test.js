import every from '../src/every.js';

describe('Testing every', () => {

  it('should return true if the array is empty', () => {
    expect(every([], (item) => item > 1)).toBe(true);
  });

  it('should return true if the array is empty', () => {
    expect(every([], (item) => item > 1)).toBe(true);
  });

  it('should return true if the array is not empty', () => {
    expect(every([1, 2, 3], (item) => item > 1)).toBe(false);
  });

  it('should return true if the array is null', () => {
    expect(every(null, (item) => item > 1)).toBe(true);
  });

  it('should return true if the array is undefined', () => {
    expect(every(undefined, (item) => item > 1)).toBe(true);
  });

});