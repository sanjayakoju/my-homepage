/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED. Expected " + expected + " found " + found;
    }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log("Expected output of max(20,10) is 20 and " + myFunctionTest(20, max(20, 10)));
console.log("Expected output of max(-5,10) is 10 and " + myFunctionTest(10, max(-5, 10)));

/* maxOfThree takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}

console.log("Expected output of maxOfThree(5,4,44) is 44 and " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55 and " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,2) is 55 and " + myFunctionTest(55, maxOfThree(55, 4, 2)));

/* isVowel checks if a character is a vowel */
function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

console.log("Expected output of isVowel('a') is true and " + myFunctionTest(true, isVowel('a')));
console.log("Expected output of isVowel('b') is false and " + myFunctionTest(false, isVowel('b')));

/* sum returns the sum of all numbers in an array */
function sum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Expected output of sum([1, 2, 3, 4]) is 10 and " + myFunctionTest(10, sum([1, 2, 3, 4])));
console.log("Expected output of sum([0, 0, 0, 0]) is 0 and " + myFunctionTest(0, sum([0, 0, 0, 0])));

/* multiply returns the product of all numbers in an array */
function multiply(numbers) {
    return numbers.reduce((product, num) => product * num, 1);
}

console.log("Expected output of multiply([1, 2, 3, 4]) is 24 and " + myFunctionTest(24, multiply([1, 2, 3, 4])));
console.log("Expected output of multiply([1, 0, 3, 4]) is 0 and " + myFunctionTest(0, multiply([1, 0, 3, 4])));

/* reverse returns the reverse of a string */
function reverse(str) {
    return str.split('').reverse().join('');
}

console.log("Expected output of reverse('jag testar') is 'ratset gaj' and " + myFunctionTest('ratset gaj', reverse('jag testar')));
console.log("Expected output of reverse('hello') is 'olleh' and " + myFunctionTest('olleh', reverse('hello')));

/* findLongestWord returns the length of the longest word in an array of words */
function findLongestWord(words) {
    return words.reduce((maxLength, word) => Math.max(maxLength, word.length), 0);
}

console.log("Expected output of findLongestWord(['apple', 'banana', 'cherry']) is 6 and " + myFunctionTest(6, findLongestWord(['apple', 'banana', 'cherry'])));
console.log("Expected output of findLongestWord(['a', 'bb', 'ccc']) is 3 and " + myFunctionTest(3, findLongestWord(['a', 'bb', 'ccc'])));

/* filterLongWords returns an array of words longer than a given length */
function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

console.log("Expected output of filterLongWords(['apple', 'banana', 'cherry'], 5) is ['banana', 'cherry'] and " + myFunctionTest(JSON.stringify(['banana', 'cherry']), JSON.stringify(filterLongWords(['apple', 'banana', 'cherry'], 5))));
console.log("Expected output of filterLongWords(['a', 'bb', 'ccc'], 1) is ['bb', 'ccc'] and " + myFunctionTest(JSON.stringify(['bb', 'ccc']), JSON.stringify(filterLongWords(['a', 'bb', 'ccc'], 1))));
