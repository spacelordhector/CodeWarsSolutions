//Finding the string 'needle' in the array of haystack. 
//Return 'found the needle at position [the position of the word needle]
function findNeedle(haystack) {
    return `found the needle at position ${haystack.findIndex(item => item === 'needle')}`
}
//Title: Fake Binary
//Given a string of digits, you should replace any digit below 5 with '0' 
//and any digit 5 and above with '1'. 
//Return the resulting string.
//Note: input will never be an empty string
function fakeBin(x) {
    return x.split('').map(num => num < 5 ? 0 : 1).join('')
}
//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
function litres(time) {
    return Math.floor(time * .5)
}