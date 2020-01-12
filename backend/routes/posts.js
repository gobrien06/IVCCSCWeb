var express = require('express');
var router = express.Router();
var posts = require('../models/posts')

router.all('/getPosts', function(req, res) {
  posts.getPosts(res);
});

router.all('/posts', function(req, res) {
  posts.getPosts(res);
});

module.exports = router;
