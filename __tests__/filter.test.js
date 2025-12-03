import filter from '../src/filter.js';

describe('Testing filter', () => {

  it('should return the filtered array', () => {
    expect(filter([1, 2, 3], (item) => item > 1)).toEqual([2, 3]);
  });

  it('should return an empty array if the array is empty', () => {
    expect(filter([], (item) => item > 1)).toEqual([[]]);
  });

  it('should return an empty array if the array is null', () => {
    expect(filter(null, (item) => item > 1)).toEqual([[]]);
  });

  it('should return an empty array if the array is undefined', () => {
    expect(filter(undefined, (item) => item > 1)).toEqual([[]]);
  });

});