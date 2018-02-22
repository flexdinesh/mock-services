
const express = require('express');

const app = express();

const { getFooDetails } = require('./stubs/foo-details');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/foo/:id', (req, res) => {
  const fooDetails = getFooDetails({
    id: req.params.id,
  });
  res.send(fooDetails);
});

module.exports = app;
