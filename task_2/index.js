let str = "Каждый охотник желает знать, где сидит фазан."
let str2 = "Каждый охотник желает знать, где сидит фазан новое слово."

function toConvertFirstLetter(string) {
    const answer = []
    const temp = string.split(' ')
    let current

    for (let i = 0; i < temp.length; i++) {
        current = temp[i].split('').filter((val, index) => index === 0)
        answer.push(current)
    }
    return answer
}

console.log(toConvertFirstLetter(str))
console.log(toConvertFirstLetter(str2))

