import capitalize from '../src/capitalize.js';
describe('testing add', () => {
    test('lower to upper',()=>{
        expect(capitalize("hello")).toBe("Hello")
    })
    test('Uppers to lower',()=>{
        expect(capitalize("HELLO")).toBe("Hello")
    })
})