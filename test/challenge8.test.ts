const organizeGifts = require('../src/challenge8.ts')
describe('organize gifts test suite', () => {
    test('test 1', () => {
        expect(organizeGifts(`76a11b`)).toStrictEqual('[a]{a}{a}(aaaaaa){b}(b)')
        expect(organizeGifts(`7a`)).toStrictEqual('(aaaaaaa)')
        expect(organizeGifts(`50a`)).toStrictEqual('[a]')
        expect(organizeGifts(`40a`)).toStrictEqual('{a}{a}{a}{a}')
    })
})