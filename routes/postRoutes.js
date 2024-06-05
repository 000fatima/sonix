
const express = require('express');
const router = express.Router();
const { getPosts, createPosts, getPostById } = require('../controllers/postController');

router.get('/', getPosts);
router.post('/', createPosts);
router.get('/:postId', getPostById);

module.exports = router;
