const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  nickname: String,
  email: String,
  password: String,
  phone: String,
  location: String,
  Location_change: Boolean,
  job: String,
  gitHub_link: String,
  linkedin_link: String,
  about_user: String,
  projects: String,
  skills: String,
  admin: Boolean,
  admin_phrase: String,
  avatar: String
});

module.exports = mongoose.model('User', userSchema);
