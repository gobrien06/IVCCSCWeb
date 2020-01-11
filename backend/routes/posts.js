var express = require('express');
var router = express.Router();
var posts = require('../models/posts')

router.posts('/getPosts', function(req, res) {
  posts.getPosts(res);
});

module.exports = router;
