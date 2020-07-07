const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/newUser', async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    surname: req.body.surname,
    nickname: req.body.nickname,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    location: req.body.location,
    Location_chenge: req.body.Location_chenge,
    job: req.body.job,
    gitHub_link: req.body.gitHub_link,
    linkedin_link: req.body.linkedin_link,
    about_user: req.body.abou_user,
    projects: req.body.projects,
    skils: req.body.skils,
    admin: req.body.admin,
    admin_phrase: req.body.admin_phrase,
});
  await newUser.save();
  res.redirect('/') // изменить
});

module.exports = router;
