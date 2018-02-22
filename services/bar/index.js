const express = require('express');

const app = express();

const { getBarDetails } = require('./stubs/bar-details');

const bodyParser = require('body-parser');

// file upload conf
app.use(bodyParser.json({
  limit: '5mb',
}));

// file upload conf
app.use(bodyParser.urlencoded({
  limit: '5mb',
  extended: true,
  parameterLimit: 50000
}));

app.get('/bar', (req, res) => {
  const barDetails = getBarDetails();
  res.send(barDetails);
});

module.exports = app;
