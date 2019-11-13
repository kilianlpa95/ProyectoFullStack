// Load required packages
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var User = require('../models/Users');
const bcrypt = require('bcrypt');


passport.use(new BasicStrategy(
  async function(username, password, cb) {

    const user = await User.findOne({
        where: {
            user_name: username
        }
    });

      // No user found with that username
      if (!user) { return cb(null, false); }

      bcrypt.compare(password, user.user_password, function(err, result){
        if(err) { return cb(err); }
        if(result && !err){
            console.log("Login correcto");
            return cb(null, user);
        } else {
            return cb(null, false);
        }
    });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

exports.isAuthenticated = passport.authenticate('basic', { session : false });
