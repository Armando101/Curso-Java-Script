const express = require('express');

const config = require('../config.js');
const user = require('./components/user/network');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const swaggerDoc = require('./swagger.json');

// Router
app.use('/api/user', user);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(config.api.port, () => {
	console.log('API escuchando en http://localhost:' + config.api.port);
});