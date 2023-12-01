function findFirstRepeated(gifts) {
    const occurrences = new Set();
    for (const gift of gifts) {
        if (occurrences.has(gift)) {
            return gift;
        }
        occurrences.add(gift);
    }
    return -1;
}

module.exports = findFirstRepeated;


