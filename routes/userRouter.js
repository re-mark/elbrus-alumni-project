const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { registerDecorator } = require('handlebars');


// ручка регистрации
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
        abou_user: req.body.abou_user,
        projects: req.body.projects,
        skils: req.body.skils,
        admin: req.body.admin,
        admin_phrase: req.body.admin_phrase
    });
  
    await newUser.save();
    res.redirect('/') // изменить
  })
  
  // ручка профиля
  router.get('/:id', async (req, res) => {
    console.log(req.params.id);
    const result = await User.findOne({"_id": req.params.id});
    res.render('userProfile', { // ---- рендерить на страницу профиля
        name: result.name,
        surname: result.surname,
        nickname: result.nickname,
        email: result.email,
        phone: result.phone,
        location: result.location,
        Location_chenge: result.Location_chenge,
        job: result.job,
        gitHub_link: result.gitHub_link,
        linkedin_link: result.linkedin_link,
        abou_user: result.abou_user,
        projects: result.projects,
        skils: result.skils,
    })
  })
  
// редактировать запись
  router.get('/change/:id', async function (req, res) {
  const result = await User.findOne({ "_id": req.params.id });
  res.render('register', {  // --- рендерить на форму регистрации (в форме прописать value)
    name: result.name,
    surname: result.surname,
    nickname: result.nickname,
    email: result.email,
    phone: result.phone,
    location: result.location,
    Location_chenge: result.Location_chenge,
    job: result.job,
    gitHub_link: result.gitHub_link,
    linkedin_link: result.linkedin_link,
    abou_user: result.abou_user,
    projects: result.projects,
    skils: result.skils,
  })
})

// поиск по локации
router.get('/find/:location', async function (req, res) {
  const result = await User.find({ "location": req.params.location});
  
  res.render('index', { // рендерить на основную страницу 
    name: result.name,
    surname: result.surname,
    nickname: result.nickname,
    email: result.email,
    phone: result.phone,
    location: result.location,
    Location_chenge: result.Location_chenge,
    job: result.job,
    gitHub_link: result.gitHub_link,
    linkedin_link: result.linkedin_link,
    abou_user: result.abou_user,
    projects: result.projects,
    skils: result.skils,
  })
})

// поиск по фамилии
router.get('/find/:name', async function (req, res) {
  const result = await User.findOne({ "surname": req.params.surname});
  
  res.render('index', { // рендерить на основную страницу 
    name: result.name,
    surname: result.surname,
    nickname: result.nickname,
    email: result.email,
    phone: result.phone,
    location: result.location,
    Location_chenge: result.Location_chenge,
    job: result.job,
    gitHub_link: result.gitHub_link,
    linkedin_link: result.linkedin_link,
    abou_user: result.abou_user,
    projects: result.projects,
    skils: result.skils,
  })
})




module.exports = router;
