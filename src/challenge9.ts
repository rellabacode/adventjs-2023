function adjustLights(lights) {
    let diff = 0
    const rev = lights.reverse()
    const colores = {
        '🔴': '🟢',
        '🟢': '🔴',
    };
    let light = colores[rev[0]]
    rev.splice(0, 1)
    rev.forEach(e => {
        if (light != e)
            diff += 1
        light = colores[light]
    })
    return diff
}

function adjustLights(lights) {
    let diff = 0;
    const colores = {
        '🔴': '🟢',
        '🟢': '🔴',
    };
    const reversedLights = lights.slice().reverse();
    let currentColor = colores[reversedLights[0]];
    for (let i = 1; i < reversedLights.length; i++) {
        if (currentColor !== reversedLights[i]) {
            diff += 1;
        }
        currentColor = colores[currentColor];
    }
    return diff;
}

module.exports = adjustLights


