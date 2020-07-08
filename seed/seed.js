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

const newUser1 = new User({
  name: 'Ivan',
  surname: 'Ivanov',
  nickname: 'testUser1',
  email: 'test@test.ru',
  password: sha256('123'),
  phone: '11-11-11',
  location: 'Moscow',
  Location_change: true,
  job: true,
  gitHub_link: 'ivan.github.com',
  linkedin_link: 'ivan.linkedin.com',
  about_user: 'i am vanya',
  projects: 'cool proj',
  skills: 'mern',
  admin: false,
  admin_phrase: 'NaN',
});

const newUser2 = new User({
  name: 'Vasya',
  surname: 'Vasya',
  nickname: 'testUser2',
  email: 'test@test.ru',
  password: sha256('123'),
  phone: '11-11-11',
  location: 'Moscow',
  Location_change: true,
  job: true,
  gitHub_link: 'Vasya.github.com',
  linkedin_link: 'Vasya.linkedin.com',
  about_user: 'i am petya',
  projects: 'cool proj',
  skills: 'mern',
  admin: false,
  admin_phrase: 'NaN',
});

const newUser3 = new User({
  name: 'John',
  surname: 'John',
  nickname: 'testUser3',
  email: 'test@test.ru',
  password: sha256('123'),
  phone: '11-11-11',
  location: 'Moscow',
  Location_change: true,
  job: true,
  gitHub_link: 'John.github.com',
  linkedin_link: 'John.linkedin.com',
  about_user: 'i am petya',
  projects: 'cool proj',
  skills: 'mern',
  admin: false,
  admin_phrase: 'NaN',
});

const newUser4 = new User({
  name: 'Jack',
  surname: 'Jack',
  nickname: 'testUser4',
  email: 'test@test.ru',
  password: sha256('123'),
  phone: '11-11-11',
  location: 'Moscow',
  Location_change: true,
  job: true,
  gitHub_link: 'Jack.github.com',
  linkedin_link: 'Jack.linkedin.com',
  about_user: 'i am petya',
  projects: 'cool proj',
  skills: 'mern',
  admin: false,
  admin_phrase: 'NaN',
});

const newUser5 = new User({
  name: 'James',
  surname: 'Jamesov',
  nickname: 'testUser5',
  email: 'test@test.ru',
  password: sha256('123'),
  phone: '11-11-11',
  location: 'Moscow',
  Location_change: true,
  job: true,
  gitHub_link: 'James.github.com',
  linkedin_link: 'James.linkedin.com',
  about_user: 'i am petya',
  projects: 'cool proj',
  skills: 'mern',
  admin: false,
  admin_phrase: 'NaN',
});

const users = [];

newUser.save()
  .then(user => users.push(user));
newUser1.save()
  .then(user => users.push(user));
newUser2.save()
  .then(user => users.push(user));
newUser3.save()
  .then(user => users.push(user));
newUser4.save()
  .then(user => users.push(user));
newUser5.save()
  .then(user => users.push(user))
  .then(() => console.log(users));
