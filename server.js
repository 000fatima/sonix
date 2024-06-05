
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
const userRoutes = require('./routes/userRoutes');
const fileRoutes = require('./routes/fileRoutes');
const postRoutes = require('./routes/postRoutes');

app.use('/api/users', userRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/posts', postRoutes);

// 404 handler
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
