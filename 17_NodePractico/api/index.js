const express = require('express');

const config = require('../config.js');
const user = require('./components/user/network');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Router
app.use('/api/user', user);
app.listen(config.api.port, () => {
	console.log('API escuchando en http://localhost:' + config.api.port);
});