const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user.js');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const alumnisArray = await User.find({ admin: false });

  let admin;
  if (req.isAuthenticated()) {
    admin = req.session.passport.user.admin;
  }

  res.render('index', { admin, alumnisArray });
});

module.exports = router;
