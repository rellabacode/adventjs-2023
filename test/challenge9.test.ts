const adjustLights = require('../src/challenge9.ts')
describe('lights suite', () => {
    let lights
    let expected
    test('test 1', () => {
        lights = ['🟢', '🔴', '🟢', '🟢', '🟢']
        expected = 1
        expect(adjustLights(lights)).toStrictEqual(expected)
    })
    test('test 2', () => {
        lights = ['🔴', '🔴', '🟢', '🔴', '🟢']
        expected = 1
        expect(adjustLights(lights)).toStrictEqual(expected)
    })
    test('test 3', () => {
        lights = ['🔴', '🔴', '🟢', '🟢', '🔴']
        expected = 2
        expect(adjustLights(lights)).toStrictEqual(expected)
    })
    test('test 4', () => {
        lights = ['🟢', '🔴', '🟢', '🔴', '🟢']
        expected = 0
        expect(adjustLights(lights)).toStrictEqual(expected)
    })
    test('test 5', () => {
        lights = ['🔴', '🔴', '🔴']
        expected = 1
        expect(adjustLights(lights)).toStrictEqual(expected)
    })
})