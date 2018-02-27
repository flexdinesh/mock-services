const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { bar: { baseURL: apiBaseURL, responseDelayTime = 0 } } = require('../../config');
const { corsMiddleware, delayResponseMiddleware } = require('../middlewares');

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

corsMiddleware(app);
delayResponseMiddleware(app, responseDelayTime);

app.get('/', (req, res) => {
  res.send('Booyah - bar mock is up and running!');
});

app.use(`${apiBaseURL}/`, routes);

module.exports = app;
