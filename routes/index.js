var express = require('express');
var router = express.Router();
var {users,chapterList} = require('../public/data.json');
-
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Blog' });
});

router.get('/list',function (req,res) {
  res.render('list');
});

router.post('/login', function (req, res, next){
  if(req.body.username == users[0].username && req.body.pwd == users[0].password) {
    res.send({d:'true'});
  } else {
    res.send({d:'false'}); 
  }
});

router.post('/getlist', function (req, res, next){
  res.send(JSON.stringify(chapterList))
});


module.exports = router;
