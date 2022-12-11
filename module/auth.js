const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');


passport.use(new GoogleStrategy({
   //in telegram
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    // });
  }
));