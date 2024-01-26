const createChristmasTree = require('../src/challenge10.ts')
describe('lights suite', () => {
    let ornaments
    let height
    let expected
    test('test 1', () => {
        ornaments = "123"
        height = 4
        expected = "   1\n" +
            "  2 3\n" +
            " 1 2 3\n" +
            "1 2 3 1\n" +
            "   |\n"
        expect(createChristmasTree(ornaments, height)).toStrictEqual(expected)
    })
    test.only('test 2', () => {
        ornaments = "*@o"
        height = 3
        expected = "  *\n" +
            " @ o\n" +
            "* @ o\n" +
            "  |\n"
        expect(createChristmasTree(ornaments, height)).toStrictEqual(expected)
    })
})