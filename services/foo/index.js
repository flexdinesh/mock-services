const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { foo: { baseURL: apiBaseURL } } = require('../../config');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.send('Booyah - foo mock is up and running!');
});

app.use(`${apiBaseURL}/`, routes);

module.exports = app;
