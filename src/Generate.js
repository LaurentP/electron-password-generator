function randomNumber() {
    return Math.round(Math.random() * (9 - 0))
}

function randomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const letter = alphabet[Math.round(Math.random() * (25 - 0))]
    const upperCase = Math.round(Math.random() * (1 - 0))
    return (upperCase === 1) ? letter.toUpperCase() : letter
}

function randomSpecial() {
    const specialChars = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
    return specialChars[Math.round(Math.random() * (5 - 0))]
}

function generate(length, numbers, letters, special) {
    let result = ''
    while (result.length < length) {
        const charType = Math.round(Math.random() * (2 - 0))
        let char = ''
        if (charType === 0 && numbers === true) {
            char = randomNumber()
        }
        else if (charType === 1 && letters === true) {
            char = randomLetter()
        }
        else if (charType === 2 && special === true) {
            char = randomSpecial()
        }
        result += char
    }
    return result
}

export default generate