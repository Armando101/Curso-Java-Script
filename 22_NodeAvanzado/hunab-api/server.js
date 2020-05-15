'use strict'

const http = require('http');
const chalk = require('chalk');
const express = require('express');

const api = require('./api');

const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);

// Definimos las rutas
app.use('/api', api);

server.listen(port, () => {
	console.log(`${chalk.green('[hunab-api]')} server listening  http://localhost:${port}`);
});