const express = require('express');

const router = express.Router();
const db = require('../database/db');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await db('laptops')
      .where({ id })
      .select('*');
    res.send(data);
  } catch (error) {
    res.status(500).send('server error');
  }
});

module.exports = router;
