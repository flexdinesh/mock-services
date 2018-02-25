const router = require('express').Router();
const { getFooDetails } = require('./stubs/foo-details');

router.get('/foo/:id', (req, res) => {
  const fooDetails = getFooDetails({
    id: req.params.id,
  });
  res.send(fooDetails);
});

module.exports = router;
