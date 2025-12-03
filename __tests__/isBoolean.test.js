import isBoolean from '../src/isBoolean';

describe('isBoolean', () => {
  test('returns true for true value', () => {
    expect(isBoolean(true)).toBe(true)
  })

  test('returns true for false', () => {
    expect(isBoolean(false)).toBe(true)
  })

  test('returns false for null', () => {
    expect(isBoolean(null)).toBe(false)
  })

  test('returns false for array', () => {
    expect(isBoolean([])).toBe(false)
  })

  test('returns false for int', () => {
    expect(isBoolean(1)).toBe(false)
  })
  test('returns false for string', () => {
    expect(isBoolean("false")).toBe(false)
  })

})