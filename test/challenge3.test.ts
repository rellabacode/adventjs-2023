const findNaughtyStep = require('../src/challenge3.ts');
describe('find anomalous step', () => {
    let expected
    let original
    let modified
    test('empty input without changes', () => {
        expected = ''
        original = ''
        modified = ''
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('empty input with step added', () => {
        expected = 'a'
        original = ''
        modified = 'a'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('empty input with multiple steps added', () => {
        expected = 'ñ'
        original = ''
        modified = 'ñop'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('add one step at the beginning', () => {
        expected = 'c'
        original = 'ab'
        modified = 'cab'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('add one step at the beginning', () => {
        expected = 'r'
        original = 'abcd'
        modified = 'rabcd'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('add one step in the middle', () => {
        expected = 'c'
        original = 'ab'
        modified = 'acb'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('add one step in the middle', () => {
        expected = 'e'
        original = 'abcd'
        modified = 'abecd'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('add one step at the end', () => {
        expected = 'c'
        original = 'ab'
        modified = 'abc'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('add one step at the end', () => {
        expected = 'e'
        original = 'abcd'
        modified = 'abcde'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('add multiple steps 1', () => {
        expected = 'a'
        original = ''
        modified = 'ab'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('add multiple steps left and right', () => {
        expected = 'a'
        original = 'j'
        modified = 'ajc'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('add multiple steps in the middle', () => {
        expected = 'x'
        original = 'jg'
        modified = 'jxcg'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('add multiple steps at the end', () => {
        expected = 'i'
        original = 'jg'
        modified = 'jgiy'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('delete one step at the beginning', () => {
        expected = 'f'
        original = 'fo'
        modified = 'o'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('delete one step at the beginning', () => {
        expected = 's'
        original = 'stepfor'
        modified = 'tepfor'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('delete one step in the middle', () => {
        expected = 'f'
        original = 'stepfor'
        modified = 'stepor'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('delete one step in the middle', () => {
        expected = 'a'
        original = 'pac'
        modified = 'pc'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('delete one step at end', () => {
        expected = 'c'
        original = 'pac'
        modified = 'pa'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('delete one step at end', () => {
        expected = 'r'
        original = 'stepfor'
        modified = 'stepfo'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('delete multiple steps at the beginning', () => {
        expected = 'p'
        original = 'pac'
        modified = 'c'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('delete multiple steps in the middle', () => {
        expected = 'b'
        original = 'pbyac'
        modified = 'pac'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('delete multiple steps at the end', () => {
        expected = 'a'
        original = 'pbyac'
        modified = 'pby'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('without editions with different characters', () => {
        expected = ''
        original = 'abcde'
        modified = 'abcde'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('without editions with the same character', () => {
        expected = ''
        original = 'iiiii'
        modified = 'iiiii'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
    test('without editions with the same character', () => {
        expected = ''
        original = 'i'
        modified = 'i'
        expect(findNaughtyStep(original, modified)).toStrictEqual(expected)
    })
});