const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.redirect('/');
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
