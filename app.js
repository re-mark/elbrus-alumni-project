const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const sha256 = require('sha256');

// Passport.js
const passport = require('passport');
const passportSession = require('passport-session');
const LocalStrategy = require('passport-local').Strategy;

// dotenv
require('dotenv').config();

// user model
const User = require('./models/user.js');

// create new express app
const app = express();

// Подключаем mongoose.
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const indexRouter = require('./routes/indexRouter');
const usersRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const registrationRouter = require('./routes/registration');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// express-session
app.use(session({
  secret: 'askdfenadf',
  resave: false,
  saveUninitialized: false,
}));

// Passport.js
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  (username, password, done) => {
    const hashPass = sha256(password);

    User.findOne({ nickname: username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (user.password !== hashPass) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  },
));

/* app.use((req, res, next) => {
  console.log(req.session);
  next();
}); */

function authMiddleware() {
  return function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  };
}

// перенести в ручку админа, вызвыать между
function adminMiddleware() {
  return function(req, res, next) {
    if (req.isAuthenticated()) {
      if (req.session.passport.user.admin) {
        console.log('Admin!');
        return next();
      }
    }
    res.redirect('/login');
  };
}

// Подключаем ручки
// main
app.use('/', indexRouter);
// Reg
app.use('/register', registrationRouter);
// Login
app.use('/login', loginRouter);
// Users
app.use('/users', usersRouter);
// Admin Page
app.get('/admin', (req, res) => {
  if (req.isAuthenticated()) {
    if (req.session.passport.user.admin) {
      res.send('Congratulations - youre admin!');
    }
  } else res.redirect('/login');
});

// Поднимаем сервер
app.listen(process.env.PORT || 3000);
