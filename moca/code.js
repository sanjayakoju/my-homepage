// Define the function sum that sums all numbers in an array
function sum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Define the function multiply that multiplies all numbers in an array
function multiply(numbers) {
    return numbers.reduce((acc, curr) => acc * curr, 1);
}

// Define the function reverse that reverses a string
function reverse(str) {
    return str.split('').reverse().join('');
}

// Define the function filterLongWords that filters words longer than a given length
function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}
