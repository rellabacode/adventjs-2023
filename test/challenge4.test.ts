const decode = require('../src/challenge4.ts');
describe('revert brackets suite', () => {
    let expected
    let message
    test('test 1', () => {
        expected = 'hola mundo'
        message = 'hola (odnum)'
        expect(decode(message)).toStrictEqual(expected)
    })
    test('test 2', () => {
        expected = 'hello world!'
        message = '(olleh) (dlrow)!'
        expect(decode(message)).toStrictEqual(expected)
    })
    test('test 3', () => {
        expected = 'santaclaus'
        message = 'sa(u(cla)atn)s'
        expect(decode(message)).toStrictEqual(expected)
    })
    test('test 4', () => {
        expected = 'hola mundo'
        message = 'hola mundo'
        expect(decode(message)).toStrictEqual(expected)
    })
})