const express = require('express');
const sha256 = require('sha256');
const User = require('../models/user');
const { registerDecorator } = require('handlebars');
const { db } = require('../models/user');
const fileUpload = require('express-fileupload');

const router = express.Router();

// ручка регистрации
router.post('/newUser', async (req, res) => {


  const fileFoto = req.files.fileFoto;
  const fileName = fileFoto.name;
  const photoAvatar = (fileName + req.body.nickname + '.jpg');
  console.log(photoAvatar);

  fileFoto.mv(__dirname + '/fotoAvatar/' + fileName + req.body.nickname + '.jpg' , function(err) {
  if(err){
    console.log(err);
  }else{
    console.log("uploaded");
  }
})

    const {name, surname, nickname} = req.body;

    const newUser = new User({ 
        name,
        surname,
        nickname,
        email: req.body.email,
        password: sha256(req.body.password),
        phone: req.body.phone,
        location: req.body.location,
        Location_chenge: req.body.Location_chenge,
        job: req.body.job,
        gitHub_link: req.body.gitHub_link,
        linkedin_link: req.body.linkedin_link,
        about_user: req.body.about_user,
        projects: req.body.projects,
        skills: req.body.skills,
        admin: req.body.admin,
        admin_phrase: req.body.admin_phrase,
        avatar: photoAvatar
        
    });
  
    await newUser.save();
    res.redirect('/') // изменить на страницу профиля
  })
  
  // ручка профиля
  router.get('/:id', async (req, res) => {
    const result = await User.findOne({_id: req.params.id});
    res.render('profile', { // ---- рендерить на страницу профиля
        _id: result._id,
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
        about_user: result.about_user,
        projects: result.projects,
        skills: result.skills,
        avatar: result.avatar
        
    })
  })
  
// получаем данные для редактирования записи
  router.get('/change/:id', async function (req, res) {
  const result = await User.findOne({ "_id": req.params.id });
  res.render('changeUserProfile', {  // --- рендерить на форму редактирования
    _id: result._id,
    name: result.name,
    surname: result.surname,
    nickname: result.nickname,
    email: result.email,
    password: result.password,
    phone: result.phone,
    location: result.location,
    Location_chenge: result.Location_chenge,
    job: result.job,
    gitHub_link: result.gitHub_link,
    linkedin_link: result.linkedin_link,
    about_user: result.about_user,
    projects: result.projects,
    skills: result.skills,
  })
})
// обновляем изменненную запись
router.post('/change', async function (req, res) {
    await User.update({ "_id": req.body._id}, {
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
    about_user: req.body.about_user,
    projects: req.body.projects,
    skills: req.body.skills,
  });
  res.redirect('/') // изменить на страницу профиля
});



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
    about_user: result.about_user,
    projects: result.projects,
    skills: result.skills,
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
    about_user: result.about_user,
    projects: result.projects,
    skills: result.skills,
  })
})

module.exports = router;
