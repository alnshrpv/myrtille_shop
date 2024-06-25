const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const serverless = require('serverless-http');

const app = express();

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
module.exports.handler = serverless(app);
