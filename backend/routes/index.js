var emails = require('./emails');
var posts = require('./posts');
var router = require('express').Router();

router.use('/emails', emails);
router.use('/posts', posts);

module.exports = router;