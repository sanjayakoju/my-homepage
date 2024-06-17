const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'css' directory
app.use('/css', express.static(path.join(__dirname, 'css')));

// Set up session middleware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// Function to determine the current hour
const getCurrentHour = () => {
    const date = new Date();
    return date.getHours();
};

// GET route to display the form
app.get('/', (req, res) => {
    const hour = getCurrentHour();
    const cssFile = hour >= 6 && hour < 18 ? 'day.css' : 'night.css';

    const formHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Dynamic Form</title>
      <link rel="stylesheet" href="/css/${cssFile}">
    </head>
    <body>
      <form action="/result" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" required>
        <button type="submit">Submit</button>
      </form>
    </body>
    </html>
  `;
    res.send(formHtml);
});

// POST route to handle form submission and redirect to /output
app.post('/result', (req, res) => {
    req.session.name = req.body.name || 'person';
    req.session.age = req.body.age || 'unknown';
    res.redirect('/output');
});

// GET route to display the result
app.get('/output', (req, res) => {
    const hour = getCurrentHour();
    const cssFile = hour >= 6 && hour < 18 ? 'day.css' : 'night.css';

    const name = req.session.name || 'person';
    const age = req.session.age || 'unknown';

    // Clear the session variables after use
    req.session.name = null;
    req.session.age = null;

    const resultHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Result</title>
      <link rel="stylesheet" href="/css/${cssFile}">
    </head>
    <body>
      <p>Welcome ${name}, age ${age}</p>
    </body>
    </html>
  `;
    res.send(resultHtml);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
