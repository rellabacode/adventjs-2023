function drawGift(size, symbol) {
    if (size == 1) return "#\n"
    let spaces = " ".repeat(size - 1)
    const border = "#".repeat(size)
    let third = "#";
    const fill = symbol.repeat(Math.max(size - 2, 0))
    let result = spaces.concat(border, "\n")
    for (let i = 2; i < size; i++) {
        spaces = spaces.substring(1)
        result = result.concat(spaces, "#", fill, "#", third, "\n")
        third = symbol.concat(third)
    }
    result = result.concat(border, third, "\n")
    for (let i = 2; i < size; i++) {
        third = third.substring(1)
        result = result.concat("#", fill, "#", third, "\n")
    }
    result = result.concat(border, "\n")
    return result
}

module.exports = drawGift