const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// тестовая ручка
router.get('/reg', function(req, res, next) {
  res.render('register');
});

module.exports = router;
