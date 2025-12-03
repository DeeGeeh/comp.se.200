import add from '../src/add.js'
describe('testing add', () => {
    test('adding 1 + 4',()=>{
        expect(add(1,4)).toBe(5)

    })
    test('adding -1 + 4',()=>{
        expect(add(-1,4)).toBe(3)

    })


})