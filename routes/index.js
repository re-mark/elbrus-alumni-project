const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user.js');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const alumniCards = await User.find();
  console.log(alumniCards);
  

  res.render('index');
});

module.exports = router;
