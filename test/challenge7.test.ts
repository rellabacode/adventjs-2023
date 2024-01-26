const drawGift = require('../src/challenge7.ts')
describe('gift suite', () => {
    let size
    let symbol
    let expected
    test('test 1', () => {
        size = 4
        symbol = "+"
        expected = "   ####\n" +
            "  #++##\n" +
            " #++#+#\n" +
            "####++#\n" +
            "#++#+#\n" +
            "#++##\n" +
            "####\n"
        expect(drawGift(size, symbol)).toStrictEqual(expected)
    })
    test('test 2', () => {
        size = 5
        symbol = "*"
        expected = "    #####\n" +
            "   #***##\n" +
            "  #***#*#\n" +
            " #***#**#\n" +
            "#####***#\n" +
            "#***#**#\n" +
            "#***#*#\n" +
            "#***##\n" +
            "#####\n"
        expect(drawGift(size, symbol)).toStrictEqual(expected)
    })
    test('test 3', () => {
        size = 1
        symbol = "^"
        expected = "#\n"
        expect(drawGift(size, symbol)).toStrictEqual(expected)
    })
    test('test 4', () => {
        size = 3
        symbol = "+"
        expected = "  ###\n" +
            " #+##\n" +
            "###+#\n" +
            "#+##\n" +
            "###\n"
        expect(drawGift(size, symbol)).toStrictEqual(expected)
    })
    test.only('test 5', () => {
        size = 2
        symbol = "+"
        expected = " ##\n" +
            "###\n" +
            "##\n"
        expect(drawGift(size, symbol)).toStrictEqual(expected)
    })
})