const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { bar: { baseURL: apiBaseURL } } = require('../../config');

const app = express();

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

app.get('/', (req, res) => {
  res.send('Booyah - bar mock is up and running!');
});

app.use(`${apiBaseURL}/`, routes);

module.exports = app;
