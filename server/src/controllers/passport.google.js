var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: '434050175104-c6reoabrfgi0cfv6dul1erskaa6qpdt8.apps.googleusercontent.com',
    clientSecret: 'TLUR5mecdhiEDAx_MmOm2jiO',
    callbackURL: "/api/users"
  },
  function(accessToken, refreshToken, profile, done) {
    if (profile) {
        return done(null, profile);
    } else {
        return done(null, false);
    }
  }
));


