const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { foo: { baseURL: apiBaseURL, responseDelayTime = 0 } } = require('../../config');
const { corsMiddleware, delayResponseMiddleware } = require('../middlewares');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
corsMiddleware(app);
delayResponseMiddleware(app, responseDelayTime);

app.get('/', (req, res) => {
  res.send('Booyah - foo mock is up and running!');
});

app.use(`${apiBaseURL}/`, routes);

module.exports = app;
