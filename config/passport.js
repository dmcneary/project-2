var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  function(usernameInput, passwordInput, done) {
    process.nextTick(function () {
    db.User.findOne({ where: 
      {username: usernameInput}
     }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(passwordInput)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });});
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, done) {
  done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
  done(err, user);
  });
  });

// Exporting our configured passport
module.exports = passport;
