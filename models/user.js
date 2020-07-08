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
  job: Boolean,
  gitHub_link: String,
  linkedin_link: String,
  about_user: String,
  projects: Array,
  skills: Array,
  admin: Boolean,
  admin_phrase: String,
});

module.exports = mongoose.model('User', userSchema);
