var express = require('express');
var router = express.Router();

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

module.exports = router;
