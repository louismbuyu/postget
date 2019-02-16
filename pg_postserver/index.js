const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const PostController = require('./controllers/PostController');
const mongoose = require('mongoose');

mongoose.connect(keys.mongoUrl);

app.use(bodyParser.json({
    limit: keys.bodyLimit
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/api/post/heartbeat', (req, res) => {
    res.json({success: true, message: 'Beep!'});
});

app.use('/api/post/', PostController);

const PORT = process.env.PORT || 5000;
app.listen(PORT);