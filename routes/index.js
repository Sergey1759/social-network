var express = require('express');
const passport = require('passport');
var router = express.Router();

require('../module/auth');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Express' });
});

router.get('/auth', function(req, res, next) {
  res.render('auth', { title: 'Express' });
});

router.get('/sign', function(req, res, next) {
  res.render('sign', { title: 'Express' });
});

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
router.get('/google',  passport.authenticate('google', { scope: ['profile'] }), function(req, res, next) {
  
});
module.exports = router;
