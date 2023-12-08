const maxDistance = require('../src/challenge6.ts');
describe('revert brackets suite', () => {
    let expected
    let movements
    test('test 1', () => {
        movements = '>>*<'
        expected = 2
        expect(maxDistance(movements)).toStrictEqual(expected)
    })
    test('test 2', () => {
        movements = '<<<>'
        expected = 2
        expect(maxDistance(movements)).toStrictEqual(expected)
    })
    test('test 3', () => {
        movements = '>***>'
        expected = 5
        expect(maxDistance(movements)).toStrictEqual(expected)
    })
})