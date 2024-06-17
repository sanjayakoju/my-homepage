const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

// Middleware to parse request body and cookies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve the HTML form
app.get('/', (req, res) => {
    res.render('index', { cookies: req.cookies });
});

// Handle form submission and set the cookie
app.post('/add-cookie', (req, res) => {
    const { key, value } = req.body;
    res.cookie(key, value);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
