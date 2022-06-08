//TITTLE: A NEEDLE IN THE HAYSTACK
//Write a function findNeedle() that takes an array full of junk but containing one "needle"
//After your function finds the needle it should return a message (as a string) that says:
//"found the needle at position " plus the index it found the needle
function findNeedle(haystack) {
    return `found the needle at position ${haystack.findIndex(item => item === 'needle')}`
}
//OR
function findNeedle(haystack) {
    let needle = haystack.findIndex(junk => junk === 'needle')
    return `found the needle at position ${needle}`
}

//TITTLE: FAKE BINARY
//Given a string of digits, you should replace any digit below 5 with '0' 
//and any digit 5 and above with '1'. 
//Return the resulting string.
//Note: input will never be an empty string
function fakeBin(x) {
    return x.split('').map(num => num < 5 ? 0 : 1).join('')
}
//Or
function fakeBin(x) {
    let array = x.split('')
    let newArray = array.map(num => {
        if (num >= 5) {
            return 1
        } else if (num < 5) {
            return 0
        }
    }).join('')
    return newArray
}
//TITTLE: KEEP HYDRATED
//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
function litres(time) {
    return Math.floor(time * .5)
}
//TITTLE: IF YOU CAN'T SLEEP, JUST COUNT SHEEP!!
//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
//Input will always be valid, i.e. no negative integers.
var countSheep = function (num) {
    if (num < 1) {
        return ``
    } else {
        let sheepCount = ''
        for (let i = 1; i <= num; i++) {
            sheepCount += `${i} sheep...`
        }
        return sheepCount
    }
}
//TITTLE: TOTAL AMOUNTS OF POINTS
//Our football team finished the championship. The result of each match look like "x:y". 
//Results of all matches are recorded in the collection.
//For example: ["3:1", "2:2", "0:1", ...]
//Write a function that takes such collection and counts the points of our team in the championship. 
//Rules for counting points for each match:
//if x > y: 3 points
//if x < y: 0 point
//if x = y: 1 point
function points(games) {
    let totalPoints = 0;
    games.forEach(string => {
        if (string[0] > string[2]) {
            totalPoints += 3
        } else if (string[0] === string[2]) {
            totalPoints += 1
        }
    })
    return totalPoints
}
//TITTLE: SENTENCE SMASH
//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
//Be careful, there shouldn't be a space at the beginning or the end of the sentence!
function smash(words) {
    return words.join(' ').trim()
};
//TITTLE: COUNTING SHEEP
//Consider an array/list of sheep where some sheep may be missing from their place.
//We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(arrayOfSheep) {
    let presentSheep = arrayOfSheep.filter(sheep => sheep === true)
    return presentSheep.length
}
//OR
function countSheeps(arrayOfSheep) {
    let presentSheep = 0;
    arrayOfSheep.forEach((x) => {
        if (x === true) {
            presentSheep += 1;
        }
    })
    return presentSheep;
}
//OR
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let sum = 0
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            sum += 1
        }
    }
    return sum;
}
//You get an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {
    let newArray = arr.filter(num => num > 0)
    return newArray.reduce((sum, num) => sum + num, 0)
}
//OR
function positiveSum(arr) {
    let sum = 0;
    arr.forEach(x => {
        if (x > 0) {
            sum += x;
        }
    })
    return sum;
}
//TITLE: OPPOSITE ATTRACTS
//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.
//If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
function lovefunc(flower1, flower2) {
    if (flower1 % 2 === 1 && flower2 % 2 === 0) {
        return true
    } else if (flower1 % 2 === 0 && flower2 % 2 === 1) {
        return true
    } else {
        return false
    }
}
//TITTLE: SUM WITHTOUT HIGHEST AND LOWEST NUMBER
//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//If an empty value ( null, None, Nothing etc. ) is given instead of an array,
// or the given array is an empty list or a list with only 1 element, return 0.
function sumArray(array) {
    if (array == null) {
        return 0;
    } else if (array.length === 1) {
        return 0;
    } else {
        array.sort((a, b) => a - b)
        let sum = 0;
        for (let i = 1; i < array.length - 1; i++) {
            sum += array[i]
        }
        return sum
    }
}
//TITTLE: SQUARE(N) SUM
function squareSum(numbers) {
    let something = numbers.map(num => num * num);
    return something.reduce((total, num) => total + num, 0)
}
//TITTLE: GRASSHOPPER-SUMMATION
//Write a program that finds the summation of every number from 1 to num. 
//The number will always be a positive integer greater than 0.
var summation = function (num) {
    let total = 0;
    for (let i = 0; i <= num; i++) {
        total += i;
    }
    return total
}
//TITTLE: L1: SET ALARM
//Write a function named setAlarm which receives two parameters.
//The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
//The function should return true if you are employed and not on vacation 
//(because these are the circumstances under which you need to set an alarm).
// It should return false otherwise.
function setAlarm(employed, vacation) {
    return employed === true && vacation === false ? true : false
}
//OR
function setAlarm(employed, vacation) {
    if (employed === true) {
        if (vacation === true) {
            return false
        } else {
            return true
        }
    } else {
        if (vacation === false) {
            return false
        } else {
            return false
        }
    }
}
//TITLE: FIND THE FIRST NON-CONSECUTIVE NUMBER
//Your task is to find the first element of an array that is not consecutive.
//By not consecutive we mean not exactly 1 larger than the previous element of the array.
//E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, 
//so that's the first non-consecutive number.
//If the whole array is consecutive then return null2.
//The array will always have at least 2 elements1 and all elements will be numbers.
// The numbers will also all be unique and in ascending order. 
//The numbers could be positive or negative and the first non-consecutive could be either too!
function firstNonConsecutive(arr) {
    for (let i = 0; i <= arr.length - 2; i++) {
        if (arr[i] - arr[i + 1] !== -1) {
            return arr[i + 1]
        }
    }
    return null
}
//TITLE: COUNT OF POSITIVE/SUM OF NEGATIVES
//Given an array of integers.
//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// 0 is neither positive nor negative.
//If the input is an empty array or is null, return an empty array.
function countPositivesSumNegatives(input) {
    let sumNumbers = 0
    let numberOfPositives = 0
    let newArray = []
    if (input == null || input == 0) {
        return newArray
    }
    input.forEach(num => {
        if (num > 0) {
            numberOfPositives++
        } else if (num < 0) {
            sumNumbers += num
        }
    })
    newArray.push(numberOfPositives, sumNumbers)
    return newArray
}
//TITLE: TO SQUARE(ROOT) OR NOT TO SQUARE(ROOT)
//Write a method, its input is an array of integers as parameter and will process every number from this array.
//Return a new array with processing every number of the input-array like this:
//If the number squared root is an integer, return that number into an array, otherwise square the number and put it into the array.
function squareOrSquareRoot(array) {
    let newArray = []
    array.forEach(num => {
        if (Math.pow(num, 0.5) % 1 === 0) {
            newArray.push(Math.pow(num, 0.5))
        } else {
            newArray.push(Math.pow(num, 2))
        }
    })
    return newArray
}
