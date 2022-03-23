const arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, 2]
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8]
const arr4 = []
const arr5 = [1]

function changeArray(arr) {
    const firstPartOfArr = []
    const secondPartOfArr = []
    let half = Math.trunc(arr.length / 2)

    if (arr.length % 2 === 0) {
        reverseArray(arr)
        return [...firstPartOfArr, ...secondPartOfArr]
    } else {
        let middlePartOfArr = arr[half]
        const currentArr = arr.filter((value, index) => index !== half)
        reverseArray(currentArr)
        return [...firstPartOfArr, middlePartOfArr, ...secondPartOfArr]
    }

    function reverseArray (arr) {
        for (let i = 0, j = half; i < half; i++, j++) {
            firstPartOfArr.push(arr[j])
            secondPartOfArr.push(arr[i])
        }
    }
}

console.log(changeArray(arr1))
console.log(changeArray(arr2))
console.log(changeArray(arr3))
console.log(changeArray(arr4))
console.log(changeArray(arr5))

