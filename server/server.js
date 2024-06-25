const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/save-user', (req, res) => {
  const userData = req.body;

  fs.appendFile('users.txt', JSON.stringify(userData) + '\n', (err) => {
    if (err) {
      console.error('Error saving data:', err);
      return res.status(500).send('Internal Server Error');
    }

    res.status(200).send('User data saved');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});