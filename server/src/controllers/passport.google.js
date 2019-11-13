var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: '434050175104-c6reoabrfgi0cfv6dul1erskaa6qpdt8.apps.googleusercontent.com',
    clientSecret: 'TLUR5mecdhiEDAx_MmOm2jiO',
    callbackURL: "/api/users"
  },
  function(accessToken, refreshToken, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
  }
));


