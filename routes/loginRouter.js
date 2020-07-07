const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  }));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = router;
