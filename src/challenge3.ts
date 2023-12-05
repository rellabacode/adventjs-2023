function findNaughtyStep(original, modified) {
    const [minor, major] = [original, modified].sort((a, b) => a.length - b.length);
    return Array.from(major).find((step, i) => minor[i] != step) ?? '';
}

module.exports = findNaughtyStep