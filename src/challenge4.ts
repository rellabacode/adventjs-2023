function decode(message) {
    const regex = /\(([^()]+)\)/g
    const replacer = (_, content) =>
        [...content].reverse().join('')
    return message
        .replace(regex, replacer)
        .replace(regex, replacer)
}

module.exports = decode;