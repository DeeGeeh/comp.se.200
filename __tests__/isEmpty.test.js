import isEmpty from '../src/isEmpty.js';

describe('Testing isEmpty', () => {
  it('should return true if the object is empty', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return false if the object is not empty', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });
});