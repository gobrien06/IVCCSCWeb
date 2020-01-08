var express = require('express');
var router = express.Router();

router.use('/users', require('./users'));
//router.use('/articles', require('./articles'));

module.exports = router;