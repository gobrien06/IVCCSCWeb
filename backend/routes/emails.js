var express = require('express');
var router = express.Router();
var emails = require('../models/emails')

router.post('/insert/', function(req, res) {
  emails.addEmail(res, req.body.email);
});

router.post('/delete/', function(req, res) {
  emails.deleteEmail(res, req.body.email);
});


module.exports = router;
