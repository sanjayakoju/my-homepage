const express = require('express');
const app = express();
const path = require('path');

// List of possible answers
const answers = [
    "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely",
    "You may rely on it", "As I see it, yes", "Most likely", "Outlook good",
    "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
    "Don't count on it", "My reply is no", "My sources say no",
    "Outlook not so good", "Very doubtful"
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

app.get("/", (req, res) => {
    res.render('index');
});

app.get("/8ball", (req, res) => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    res.send(randomAnswer);
});

app.listen(3000, () => {
    console.log('Magic 8 Ball app listening on port 3000');
});
