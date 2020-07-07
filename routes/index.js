const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user.js');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const alumnisArray = await User.find();
  console.log(alumnisArray);
  

  res.render('index', { alumnisArray });
});

// тестовая ручка
router.get('/reg', function(req, res, next) {
  res.render('register');
});

module.exports = router;
