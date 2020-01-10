var emails = require('./emails');
var router = require('express').Router();

router.use('/emails', emails);

module.exports = router;