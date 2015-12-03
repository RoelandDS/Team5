var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({"team":"Team 5",
    "members": [
      {"name": "Rutger Benoot"},
      {"name": "Gaetano Herman"}
    ]});
});

router.get('/index', function(req, res, next) {
  res.render('index');
});

module.exports = router;
