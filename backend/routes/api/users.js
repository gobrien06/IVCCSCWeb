var express = require('express');
var router = express.Router();
var users = require('../../models/users')

router.get('/', function(req, res) {
  res.send('/api/users');
});



module.exports = router;
