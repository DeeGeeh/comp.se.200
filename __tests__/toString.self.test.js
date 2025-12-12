import toString from '../src/toString.js';

describe('toString - Self-designed tests (Phase 1 plan)', () => {
  it('Test #1: String input', () => {
    expect(toString('hello')).toBe('hello');
  });

  it('Test #2: Empty input', () => {
    expect(toString('')).toBe('');
  });

  it('Test #3: Positive num', () => {
    expect(toString(1)).toBe('1');
  });

  it('Test #4: Negative num', () => {
    expect(toString(-1)).toBe('-1');
  });

  it('Test #5: Negative zero', () => {
    expect(toString(-0)).toBe('-0');
  });

  it('Test #6: Empty array', () => {
    expect(toString([])).toBe('');
  });

  it('Test #7: Array w/ nums', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
  });

  it('Test #8: Array w/ null', () => {
    expect(toString([1, null, 3])).toBe('1,,3');
  });

  it('Test #9: Nested array', () => {
    expect(toString([[1, 2, 3], [4]])).toBe('1,2,3,4');
  });

  it('Test #10: Dumb array', () => {
    expect(toString([[[1]]])).toBe('1');
  });

  it('Test #11: Null input', () => {
    expect(toString(null)).toBe('');
  });

  it('Test #12: Undefined input', () => {
    expect(toString(undefined)).toBe('');
  });

});

