'use strict'

const debug = require('debug')('hunab:api');
const http = require('http');
const chalk = require('chalk');
const express = require('express');

const api = require('./api');

const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);

// Definimos las rutas
app.use('/api', api);

// Express error handler
app.use((err, req, res, next) => {
	debug(`Error: ${err.message}`);

	// Not found errors
	if (err.message.match(/not found/)) {
		return res.status(404).send({ error: err.message })
	}

	res.status(500).send({ error: err.message });
});

function handleFatalError(err) {
	console.log(`${chalk.red('[fatal error]')} ${err.message}`);
	console.log(err.stack);
	process.exit(1);
}

process.on('uncaughtException', handleFatalError);
process.on('unhandledRejection', handleFatalError);

server.listen(port, () => {
	console.log(`${chalk.green('[hunab-api]')} server listening  http://localhost:${port}`);
});