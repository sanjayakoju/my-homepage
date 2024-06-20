// Import required modules
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

// Create Express app
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

// Set up initial session data (empty tasks array)
app.use((req, res, next) => {
    if (!req.session.tasks) {
        req.session.tasks = [];
    }
    next();
});

// Routes
// GET request to display all tasks
app.get('/', (req, res) => {
    res.send(`
        <h1>TODO List</h1>
        <form action="/add" method="post">
            <input type="text" name="task" placeholder="Enter task" required>
            <button type="submit">Add Task</button>
        </form>
        <ul>
            ${req.session.tasks.map(task => `<li>${task}</li>`).join('')}
        </ul>
    `);
});

// POST request to add a task
app.post('/add', (req, res) => {
    const { task } = req.body;
    req.session.tasks.push(task);
    res.redirect('/');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
