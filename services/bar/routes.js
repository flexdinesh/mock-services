const router = require('express').Router();
const { getBarDetails } = require('./stubs/bar-details');

router.get('/bar', (req, res) => {
  const barDetails = getBarDetails();
  res.send(barDetails);
});

module.exports = router;
