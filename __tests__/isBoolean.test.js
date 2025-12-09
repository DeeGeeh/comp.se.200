import isBoolean from '../src/isBoolean';

describe('isBoolean', () => {
  test('returns true primitive', () => {
    expect(isBoolean(true)).toBe(true)
  })

  test('Boolean false primtive', () => {
    expect(isBoolean(false)).toBe(true)
  })

  test('Boolean object', () => {
    expect(isBoolean(new Boolean(true))).toBe(true)
  })

  test('null', () => {
    expect(isBoolean(null)).toBe(false)
  })

  test('undefined', () => {
    expect(isBoolean()).toBe(false)
  })
  test('number 0', () => {
    expect(isBoolean(0)).toBe(false)
  })
  test('number 1', () => {
    expect(isBoolean(1)).toBe(false)
  })
  test('NaN', () => {
    expect(isBoolean(NaN)).toBe(false)
  })
  test('String true', () => {
    expect(isBoolean("true")).toBe(false)
  })
  test('Empty array', () => {
    expect(isBoolean([])).toBe(false)
  })
})