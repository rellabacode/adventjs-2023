function organizeGifts(gifts) {
    const regex = /(\d{1,}[a-z])/g
    const matches = gifts.match(regex)
    let result = ''
    for (let i = 0; i < matches.length; i++) {
        const last = matches[i].length - 1
        const type = matches[i].slice(last)
        const numGifts = new Number(matches[i].substring(0, last))
        const palets = Math.floor(numGifts / 50)
        let rest = numGifts % 50
        const boxes = Math.floor(rest / 10)
        rest = rest % 10
        result += ('[' + type + ']').repeat(palets) +
            ('{' + type + '}').repeat(boxes) + '(' + (type).repeat(rest) + ')'
    }
    return result.replace(/\[\]|{}|\(\)/g, '')
}

module.exports = organizeGifts