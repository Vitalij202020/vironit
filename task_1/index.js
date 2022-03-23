const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
const numbers2 = [2, 3, 5, 7, 11, 13, 17, 19, 27, 37];

function currentSums (arr) {
    const temp = []
    const answer = []
    let currentValue

    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i])
        if (i === 0) {
            answer.push(temp[0])
        } else {
            currentValue = temp.reduce((sum, next) => sum + next, 0)
            answer.push(currentValue)
        }
    }
    return answer
}

console.log(currentSums(numbers))
console.log(currentSums(numbers2))

