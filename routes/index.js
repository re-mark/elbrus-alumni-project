const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user.js');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const alumnisArray = await User.find();

  res.render('index', { alumnisArray });
});

module.exports = router;
