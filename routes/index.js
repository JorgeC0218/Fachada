var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
=======
//Get homepage
router.get('/', function(req, res) {
  res.render('index');

});

module.exports = router;
