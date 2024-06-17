// my_math.js
const pi = 3.14;

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return x / y;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    pi
};
