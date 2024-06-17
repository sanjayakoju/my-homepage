const express = require('express');
const app = express();

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// GET route to display the form
app.get('/', (req, res) => {
    const formHtml = `
    <form action="/result" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
      <label for="age">Age:</label>
      <input type="text" id="age" name="age">
      <button type="submit">Submit</button>
    </form>
  `;
    res.send(formHtml);
});

// POST route to handle form submission
app.post('/result', (req, res) => {
    const name = req.body.name || 'person';
    const age = req.body.age || 'unknown';
    res.send(`Welcome ${name}, age ${age}`);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
