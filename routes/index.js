var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/form', function(req, res, next) {
  res.render('form');
});

router.post('/processing', function(req, res, next) {
  console.log(req.body);
  var a = req.body.txt1;
  var b = req.body.txt2;
  var c = parseInt (a)+ parseInt (b);
 
  res.render('ans',{mya:a,myb:b,myc:c});
});

module.exports = router;