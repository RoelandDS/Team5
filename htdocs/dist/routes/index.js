var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
  host: '173.194.105.180',
  user: 'student',
  password: 'mulestudent'
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({"team":"Team 5",
    "members": [
      {"name": "Rutger Benoot"},
      {"name": " "}
    ]});
});

router.get('/index', function(req, res, next) {
  res.render('index');
});

router.get('/qrcode', function(req, res, next) {
  connection.connect();

  connection.query('SELECT img_data FROM training.qr_code where img_title like \'%Team 5%\'', function(err, rows, fields) {
    if (err) next(err);

    var buffer = new Buffer(rows[0].img_data);
    var bufferBase64 = buffer.toString('base64');

    res.send(bufferBase64);
  });
  connection.end();
})

module.exports = router;
