var express = require('express');
var router = express.Router();
var emails = require('../models/emails')

router.get('/insert/:email', function(req, res) {
  emails.addEmail(res, req.params.email);
});

router.get('/delete/:email', function(req, res) {
  emails.deleteEmail(res, req.params.email);
});


module.exports = router;
