
const express = require('express');
const router = express.Router();
const { getUsers, getUserPosts } = require('../controllers/userController');

router.get('/', getUsers);
router.get('/:id/posts', getUserPosts);

module.exports = router;
