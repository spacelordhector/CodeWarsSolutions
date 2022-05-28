//TITTLE: REMOVE THE MINIMUM
//Given an array of integers, remove the smallest value. 
//Do not mutate the original array/list.
// If there are multiple elements with the same value, remove the one with a lower index.
// If you get an empty array/list, return an empty array/list.
//Don't change the order of the elements that are left.
function removeSmallest(numbers) {
    let newNumbers = [...numbers]
    let minimumNumber = Math.min(...newNumbers)
    let indexOfMinimumNumber = newNumbers.findIndex(num => num === minimumNumber)
    newNumbers.splice(indexOfMinimumNumber, 1)
    return newNumbers
}
//TITTLE: SHORTEST WORD
//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.
function findShort(s) {
    let newString = s.split(' ')
    let lengthStringArray = newString.map(num => num.length)
    let sortingLengthStringArray = lengthStringArray.sort((a, b) => a - b)
    return sortingLengthStringArray.shift()
}