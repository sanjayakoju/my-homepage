const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let sum = 0;

function getNumber() {
    readline.question('Enter a number (or type "stop" to finish): ', input => {
        if (input.toLowerCase() === 'stop') {
            console.log(`The sum of all the numbers is: ${sum}`);
            readline.close();
        } else {
            const number = parseFloat(input);
            if (!isNaN(number)) {
                sum += number;
            } else {
                console.log('That is not a valid number.');
            }
            getNumber();  // Recursively call getNumber to prompt the user again
        }
    });
}

getNumber();
