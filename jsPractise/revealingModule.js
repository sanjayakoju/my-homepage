var count = (function() {
    // Private variable
    var counter = 0;

    // Method to add 1 to the counter
    function add() {
        counter += 1;
        console.log(counter);
    }

    // Method to reset the counter to 0
    function reset() {
        counter = 0;
        console.log(counter);
    }

    // Revealing the public methods
    return {
        add: add,
        reset: reset
    };
})();

// Example usage:
count.add();   // Outputs: 1
count.add();   // Outputs: 2
count.reset(); // Outputs: 0
count.add();   // Outputs: 1



var add5 = make_adder(5) // return the function with own private counter
add5();
add5();
console.log(add5()) // output 15

var add7 = make_adder(7) // return the function with own private counter
add7();
add7();
console.log(add7()) // output 21

// Solution
function make_adder(inc) {
    // Private variable to hold the counter
    var counter = 0;

    // Return a function that increments the counter by 'inc'
    return function() {
        counter += inc;
        return counter;
    }
}
