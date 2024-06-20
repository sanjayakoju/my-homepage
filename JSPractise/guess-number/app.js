const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(session({
    secret: 'your_secret_key', // replace with a secure secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // use true if using HTTPS
}));

app.get('/', (req, res) => {
    if (!req.session.guesses) {
        req.session.guesses = [];
    }

    const previousGuesses = req.session.guesses;

    let newGuess;
    if (previousGuesses.length < 11) {
        do {
            newGuess = Math.floor(Math.random() * 11);
        } while (previousGuesses.includes(newGuess));

        req.session.guesses.push(newGuess);
    } else {
        newGuess = "I have guessed all possible numbers";
    }

    res.send(`
        <html>
            <body>
                <h1>Guess the Number</h1>
                <p>Current Guess: ${newGuess}</p>
                <p>Previous Guesses: ${previousGuesses.join(', ')}</p>
                <a href="/">Guess Again</a>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Guess the number app listening at http://localhost:${port}`);
});
