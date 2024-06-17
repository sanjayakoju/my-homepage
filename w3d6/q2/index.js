const express = require('express');
const path = require('path');
const app = express();

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// GET route to display the form
app.get('/', (req, res) => {
    res.render('form');
});

// POST route to handle form submission
app.post('/result', (req, res) => {
    const name = req.body.name || 'person';
    const age = req.body.age || 'unknown';
    res.render('result', { name, age });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
