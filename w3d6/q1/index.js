const express = require('express');
const path = require('path');
const app = express();

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

// Serve static files from the 'css' directory
app.use('/css', express.static(path.join(__dirname, 'css')));

// GET route to render the index page
app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    const cssFile = hour >= 6 && hour < 18 ? 'day.css' : 'night.css';

    res.render('index', {
        time: date.toTimeString(),
        cssFile: cssFile
    });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
