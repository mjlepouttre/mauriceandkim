var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/travel', function(req, res, next) {
  res.render('travel');
});

router.get('/ceremony', function(req, res, next) {
  res.render('ceremony');
});

router.get('/info', function(req, res, next) {
  res.render('info');
});

router.get('/accomodations', function(req, res, next) {
  res.render('accomodations');
});

router.get('/things-to-do', function(req, res, next) {
  res.render('things-to-do');
});

module.exports = router;
