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
  admin: { type: Boolean, default: false },
  admin_phrase: String,
  avatar: String,
  show: { type: Boolean, default: true },
});

module.exports = mongoose.model('User', userSchema);
