import isObject from '../src/isObject.js';

describe('isObject', () => {
  test('returns true for empty object', () => {
    expect(isObject({})).toBe(true)
  })

  test('returns true for object with properties', () => {
    expect(isObject({ name: 'John', age: 30 })).toBe(true)
  })

  test('returns false for null', () => {
    expect(isObject(null)).toBe(false)
  })

  test('returns true for array', () => {
    expect(isObject([])).toBe(true)
  })

})