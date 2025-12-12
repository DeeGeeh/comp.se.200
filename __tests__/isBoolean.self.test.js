import isBoolean from '../src/isBoolean';

describe('isBoolean', () => {
  test('Test #1: returns true primitive', () => {
    expect(isBoolean(true)).toBe(true)
  })

  test('Test #2: Boolean false primtive', () => {
    expect(isBoolean(false)).toBe(true)
  })

  test('Test #3: Boolean object', () => {
    expect(isBoolean(new Boolean(true))).toBe(true)
  })

  test('Test #4: null', () => {
    expect(isBoolean(null)).toBe(false)
  })

  test('Test #5: undefined', () => {
    expect(isBoolean()).toBe(false)
  })
  test('Test #6: number 0', () => {
    expect(isBoolean(0)).toBe(false)
  })
  test('Test #7: number 1', () => {
    expect(isBoolean(1)).toBe(false)
  })
  test('Test #8: NaN', () => {
    expect(isBoolean(NaN)).toBe(false)
  })
  test('Test #9: String true', () => {
    expect(isBoolean("true")).toBe(false)
  })
  test('Test #10: Empty array', () => {
    expect(isBoolean([])).toBe(false)
  })
})