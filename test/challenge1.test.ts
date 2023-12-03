// eslint-disable-next-line @typescript-eslint/no-var-requires
const findFirstRepeated = require("../src/challenge1.ts")
describe('first gift repeated suite', () => {
    let giftIds
    let expected
    test('empty input', () => {
        expected = -1
        giftIds = []
        expect(findFirstRepeated(giftIds)).toStrictEqual(expected)
    })
    test('unique candidate', () => {
        expected = -1
        giftIds = [1]
        expect(findFirstRepeated(giftIds)).toStrictEqual(expected)
    })
    test('unique candidate repeated', () => {
        expected = 2
        giftIds = [2, 2]
        expect(findFirstRepeated(giftIds)).toStrictEqual(expected)
    })
    test('multiple candidates', () => {
        expected = 3
        giftIds = [2, 1, 3, 5, 3, 2]
        expect(findFirstRepeated(giftIds)).toStrictEqual(expected)
    })
    test('no repeated', () => {
        expected = -1
        giftIds = [1, 2, 3, 4]
        expect(findFirstRepeated(giftIds)).toStrictEqual(expected)
    })
    test('no repeated 2', () => {
        expected = -1
        giftIds = [2, 4, 3, 5, 1]
        expect(findFirstRepeated(giftIds)).toStrictEqual(expected)
    })
    test('no repeated 3', () => {
        expected = -1
        giftIds = [10, 20, 30]
        expect(findFirstRepeated(giftIds)).toStrictEqual(expected)
    })
    test('multiple candidates 2', () => {
        expected = 5
        giftIds = [5, 1, 5, 1]
        expect(findFirstRepeated(giftIds)).toStrictEqual(expected)
    })
    test('greater input', () => {
        expected = 2
        giftIds = [5, 1, 2, 3, 2, 5, 1]
        expect(findFirstRepeated(giftIds)).toStrictEqual(expected)
    })
    test('greater input 2', () => {
        expected = 20
        giftIds = [12, 20, 30, 11, 20, 12]
        expect(findFirstRepeated(giftIds)).toStrictEqual(expected)
    })
})
