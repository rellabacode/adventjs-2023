// eslint-disable-next-line @typescript-eslint/no-var-requires
const manufacture = require("../src/challenge2.ts")
describe('gifts buildables suite', () => {
    let expected
    let gifts
    let materials
    test('empty input', () => {
        expected = []
        gifts = []
        materials = ''
        expect(manufacture(gifts, materials)).toStrictEqual(expected)
    })
    test('multiple buildables', () => {
        expected = ['tren', 'oso']
        gifts = ['tren', 'oso', 'pelota']
        materials = 'tronesa'
        expect(manufacture(gifts, materials)).toStrictEqual(expected)
    })
    test('unique buildable', () => {
        expected = ['puzzle']
        gifts = ['juego', 'puzzle']
        materials = 'jlepuz'
        expect(manufacture(gifts, materials)).toStrictEqual(expected)
    })
    test('none buildable', () => {
        expected = []
        gifts = ['libro', 'ps5']
        materials = 'psli'
        expect(manufacture(gifts, materials)).toStrictEqual(expected)
    })
})
