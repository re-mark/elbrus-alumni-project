const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user.js');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const alumnisArray = await User.find({ admin: false });
  let admin;
  let username;
  let id;
  let auth = false;
  if (req.isAuthenticated()) {
    admin = req.session.passport.user.admin;
    auth = true;
    username = req.session.passport.user.name;
    id = req.session.passport.user._id;
  }

  res.render('index', { id, username, auth, admin, alumnisArray });
});

module.exports = router;
