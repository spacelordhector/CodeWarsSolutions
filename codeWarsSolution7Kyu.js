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
//TITTLE: GET THE MIDDLE CHARACTER
//You are going to be given a word. Your job is to return the middle character of the word. 
//If the word's length is odd, return the middle character. 
//If the word's length is even, return the middle 2 characters.
function getMiddle(s) {
    let wordLength = s.length
    if (wordLength < 2) {
        return s
    } else if (wordLength === 2) {
        return s
    } else if (wordLength % 2 === 0) {
        return s.slice((wordLength / 2 - 1), (wordLength / 2 + 1))
    } else {
        return s[Math.floor(wordLength / 2)]
    }
}
//TITLE: ONES AND ZEROS
//Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
//However, the arrays can have varying lengths, not just limited to 4.
const binaryArrayToNumber = function (arr) {
    let counter = 0;
    let indexCounter = -1
    let ex = 1
    let binaryNumber = 0
    while (counter < arr.length) {
        binaryNumber += arr[arr.length + indexCounter] * ex;
        counter++;
        indexCounter += -1;
        ex *= 2;
    }
    return binaryNumber
};
//TITLE: EVEN NUMBERS IN AN ARRAY
//Given an array of numbers, 
//return a new array of length number containing the last even numbers from the original array (in the same order). 
//The original array will be not empty and will contain at least "number" even numbers.
function evenNumbers(array, number) {
    let newArray = array.filter(num => num % 2 === 0)
    return newArray.slice(-number)
}

//TITLE: TESTING 1-2-3
//Write a function which takes a list of strings and returns each line prepended by the correct number.
//The numbering starts at 1. The format is n: string. Notice the colon and space in between.
var number = function (array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(`${i + 1}: ${array[i]}`)
    }
    return newArray
}