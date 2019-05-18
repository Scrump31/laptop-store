const express = require('express');

const router = express.Router();
const db = require('../database/db');

router.get('/', async (req, res) => {
  try {
    const data = await db.select('*').from('laptops');
    res.send(data);
  } catch (error) {
    res.status(500).send('server error');
  }
});

module.exports = router;
