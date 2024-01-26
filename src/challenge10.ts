function createChristmasTree(ornaments, height) {
    const generateLevel = (arr, start, len) => {
        let result = ''
        for (let i = 0; i < len; i++) {
            result = result.concat(arr[start % arr.length], " ")
            start += 1
        }
        return result.trim()
    }
    let left = " ".repeat(Math.max(height - 1, 0))
    const trunk = left.concat("|", "\n")
    const ornamentsArr = ornaments.split('')
    let tree = ''
    let start = 0
    for (let level = 1; level <= height; level++) {
        tree = tree
            .concat(left, generateLevel(ornamentsArr, start, level), "\n")
        left = left.slice(1)
        start = start + level % ornamentsArr.length
    }
    return tree.concat(trunk)
}

module.exports = createChristmasTree