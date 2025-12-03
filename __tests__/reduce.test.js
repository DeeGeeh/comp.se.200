import reduce from '../src/reduce.js';

test('first test',()=>{
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).toBe(3)
})