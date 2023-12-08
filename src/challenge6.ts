function maxDistance(movements) {
    const inc = movements.match(/>/g)?.length | 0
    const dec = movements.match(/</g)?.length | 0
    const total = Math.abs(-dec + inc)
    return total + movements.length - dec - inc;
}

module.exports = maxDistance;