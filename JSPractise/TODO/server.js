const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs'); // Set EJS as the view engine

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

// Set up initial session data
app.use((req, res, next) => {
    if (!req.session.tasks) {
        req.session.tasks = [];
    }
    next();
});

// GET request to render the EJS template
app.get('/', (req, res) => {
    res.render('todo', { tasks: req.session.tasks });
});

// POST request to handle adding a task
app.post('/add', (req, res) => {
    const { task } = req.body;
    req.session.tasks.push(task);
    res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
