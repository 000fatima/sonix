
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'data.json');

const getPosts = (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data file.');
        }
        res.json(JSON.parse(data));
    });
};

const createPosts = async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data.slice(0, 10);

        fs.writeFile(filePath, JSON.stringify(posts, null, 2), 'utf8', (err) => {
            if (err) {
                return res.status(500).send('Error writing data file.');
            }
            res.send('Posts saved successfully.');
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getPostById = (req, res) => {
    const postId = parseInt(req.params.postId, 10);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data file.');
        }
        const posts = JSON.parse(data);
        const post = posts.find(p => p.id === postId);
        if (!post) {
            return res.status(404).send('Post not found.');
        }
        res.json(post);
    });
};

module.exports = {
    getPosts,
    createPosts,
    getPostById
};
