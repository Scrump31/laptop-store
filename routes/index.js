const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/frontend/build/index.html`));
  } catch (error) {
    res.status(500).send('server error');
  }
});

module.exports = router;
