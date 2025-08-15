require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Example: Access your API key
const apiKey = process.env.API_KEY;

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.get('/apikey', (req, res) => {
  res.json({ apiKey }); // For testing only; remove in production!
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
