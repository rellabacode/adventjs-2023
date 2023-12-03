function manufacture(gifts, materials) {
    const dictionary = new Set(materials);
    return gifts.filter((gift) => {
        return gift.split('')
            .every(chunk => dictionary.has(chunk))
    });
}

module.exports = manufacture;