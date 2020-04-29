const express = require('express');

const config = require('../config.js');
const post = require('./components/post/network');
const errors = require('../network/errors');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Router
app.use('/api/post', post);

app.use(errors);

app.listen(config.post.port, () => {
	console.log('Servicio post escuchando en http://localhost:' + config.post.port);
});