
const createFile = (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded or incorrect file type.');
    }
    res.send('File uploaded successfully.');
};

module.exports = {
    createFile
};
