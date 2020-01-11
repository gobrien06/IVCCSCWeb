var express = require('express');
var router = express.Router();
var posts = require('../models/posts')

router.post('/getPosts', function(req, res) {
  posts.getPosts(res);
});

router.post('/posts', function(req, res) {
  posts.getPosts(res);
});

module.exports = router;
