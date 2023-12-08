function maxDistance(movements) {
    const inc = movements.match(/>/g)?.length | 0
    const dec = movements.match(/</g)?.length | 0
    const ast = movements.match(/\*/g)?.length | 0
    const total = -dec + inc
    return Math.abs(total + (total >= 0 ? ast : -ast));
}

module.exports = maxDistance;