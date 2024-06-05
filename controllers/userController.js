
const axios = require('axios');

const getUsers = async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        res.json(response.data.slice(0, 10));
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getUserPosts = async (req, res) => {
    const userId = req.params.id;
    try {
        const [userResponse, postsResponse] = await Promise.all([
            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        ]);
        res.json({ user: userResponse.data, posts: postsResponse.data });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getUsers,
    getUserPosts
};
