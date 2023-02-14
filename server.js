require('dotenv').config();

const express = require('express');

// express app
const app = express();

// port
const port = process.env.PORT || 8000;

// routes
app.get('/', (req, res, next) => {
  res.json({ message: 'Getting get request' });
})

// listen to requests
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
})