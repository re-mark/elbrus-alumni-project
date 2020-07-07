const mongoose = require('mongoose');
const sha256 = require('sha256');
const User = require('../models/user.js');

mongoose.connect('mongodb://localhost:27017/alumniProject', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const newUser = new User({
  name: 'Petr',
  surname: 'Petrov',
  nickname: 'testUser',
  email: 'test@test.ru',
  password: sha256('123'),
  phone: '11-11-11',
  location: 'Moscow',
  Location_change: true,
  job: true,
  gitHub_link: 'petr.github.com',
  linkedin_link: 'petr.linkedin.com',
  about_user: 'i am petya',
  projects: 'cool proj',
  skills: 'mern',
  admin: false,
  admin_phrase: 'NaN',
});

newUser.save()
  .then(user => console.log(user));
